import React, { Component } from 'react';
import { Text, View, ListView, RefreshControl, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import geolib from 'geolib';
import { List } from 'immutable';

import styles, { maxStations } from './StationList.style';

import CityBikes from '../../services/CityBikes';

const dataSourceTemplate = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
const locationIsValid = location => location.latitude != null && location.longitude != null;
const locationIsNewerThanPrevious = (oldLoc, newLoc) => {
  if (!newLoc.isUpToDate && oldLoc) {
    return !oldLoc.isUpToDate;
  }
  return true;
};
var that;

class StationList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: dataSourceTemplate,
      refreshing: false,
    };

    // We use 'that' as the context in the 'onRefresh' method, because it
    // needs to be passed to the 'RefreshControl' component.
    that = this;

    // 'closestStations' will contain the {maxStations} closest stations to our
    // location. 'closestDistances' will contain their corresponding distances.
    this.closestStations = [];
    this.closestDistances = [];
  }

  componentDidMount() {
    this.refreshData(false, true);
  }

  componentWillReceiveProps(nextProps) {
    const newLocation = nextProps.location;
    const oldLocation = this.props.location;
    // If we have a location...
    if (locationIsValid(newLocation)
      && locationIsNewerThanPrevious(oldLocation, newLocation)
      && (nextProps.stations !== this.props.stations || newLocation !== oldLocation)
    ) {
      this.closestStations = [];
      this.closestDistances = [];
      for (const station of nextProps.stations) {
        // Determine distance to station
        const distance = geolib.getDistance(
          { latitude: station.latitude, longitude: station.longitude },
          { latitude: newLocation.latitude, longitude: newLocation.longitude }
        );

        // The 'furthestClosestDistance' is the furthest distance in the 'closestDistances' array.
        // (That array is sorted, so we know that it's always the last element.) If the current
        // station is *closer* than this furthest distance, then we know we should add it to the
        // 'closestStations' array. Otherwise, we move on to the next station...
        const furthestClosestDistance = this.closestDistances[this.closestDistances.length - 1];
        if (distance < furthestClosestDistance || this.closestStations.length < maxStations) {
          this.updateClosestStations(station, distance);
        }

        // Add these distances to the station objects
        for (let i = 0; i < this.closestStations.length; i++) {
          this.closestStations[i].distance = this.closestDistances[i];
        }
        this.props.nearestStationsUpdated(this.closestStations);
      }
    }

    if (nextProps.nearestStations !== this.props.nearestStations) {
      this.state.dataSource = dataSourceTemplate.cloneWithRows(nextProps.nearestStations.toArray());
    }
  }

  getStationsList(changeRefreshingState = true, latitude = null, longitude = null) {
    CityBikes.getStationsList(latitude, longitude)
      .then(
        (result) => {
          this.props.updateStations(result.network.stations);
          if (changeRefreshingState) this.setState({ refreshing: false });
        }
      );
  }

  updateClosestStations(station, distance) {
    // If there are no closest stations already, just add station
    if (this.closestStations.length === 0) {
      this.closestStations.push(station);
      this.closestDistances.push(distance);

    // Otherwise...
    } else {
      // Put the station in the correct place
      for (let i = this.closestStations.length - 1; i >= 0; i--) {
        if (distance > this.closestDistances[i]) {
          this.closestStations.splice(i + 1, 0, station);
          this.closestDistances.splice(i + 1, 0, distance);
          break;
        } else if (i === 0) {
          this.closestStations.splice(0, 0, station);
          this.closestDistances.splice(0, 0, distance);
        }
      }

      // Truncate the array if it contains more than maxStations
      if (this.closestStations.length > maxStations) {
        this.closestStations.splice(maxStations);
        this.closestDistances.splice(maxStations);
      }
    }
  }

  refreshData(changeRefreshingState = true, useLastKnownLocation = false) {
    if (changeRefreshingState) that.setState({ refreshing: true });

    // Determine the maximum age of the location
    const maximumAge = useLastKnownLocation ? 3600000 : 1000;

    // First, get the user's current location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // Deal with the position here.
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        that.props.updateLocation(latitude, longitude, useLastKnownLocation);
        // Then retrieve the list of stations
        that.getStationsList(changeRefreshingState, latitude, longitude);
      },
      () => {
        that.props.updateLocation(null, null, useLastKnownLocation);
        if (changeRefreshingState) that.setState({ refreshing: false });
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge }
    );

    // If we've asked for the last known location, then request a more accurate
    // location as well to make sure we get accurate data.
    if (useLastKnownLocation) {
      this.refreshData(changeRefreshingState, false);
    }
  }

  renderRow(rowData, sectionID, rowID) {
    const goToStationDetail = (row) => () => Actions.stationDetail({
      stationId: row.id,
      title: row.name.split(' - ')[1],
      freeBikes: row.free_bikes,
      emptySlots: row.empty_slots,
    });
    return (
      <TouchableHighlight onPress={goToStationDetail(rowData)}>
        <View key={`row-${sectionID}-${rowID}`}>
          <View style={styles.row}>
            <Text style={styles.stationName}>
              {rowData.name.split(' - ')[1]}
            </Text>
            <View style={styles.details}>
              <Text style={styles.stationDistance}>
                Distance: {rowData.distance > 1000 ? `${rowData.distance / 1000}km` : `${rowData.distance}m`}
              </Text>
            </View>
            <View style={styles.details}>
              <Text style={styles.stationDetails}>
                Bikes: {rowData.free_bikes}
              </Text>
              <Text style={styles.stationDetails}>
                Spaces: {rowData.empty_slots}
              </Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  renderSeparator(sectionID, rowID) {
    return (
      <View key={`separator-${sectionID}-${rowID}`} style={styles.separator} />
    );
  }

  render() {
    return (
      <ListView
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.refreshData}
          />
        }
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        renderSeparator={this.renderSeparator}
      />
    );
  }
}

StationList.propTypes = {
  stations: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
    }).isRequired),
  nearestStations: React.PropTypes.instanceOf(List),
  location: React.PropTypes.shape({
    latitude: React.PropTypes.number,
    longitude: React.PropTypes.number,
    isUpToDate: React.PropTypes.bool,
  }),
  updateStations: React.PropTypes.func,
  nearestStationsUpdated: React.PropTypes.func,
};

export default StationList;
