import React, { Component } from 'react';
import { Text, View, ListView, RefreshControl } from 'react-native';
import styles from './StationList.style';
import CityBikes from '../../services/CityBikes';

const dataSourceTemplate = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
const maxStations = 5;
var that;

class StationList extends Component {
  constructor(props) {
    super(props);
    this.dataSource = dataSourceTemplate;
    this.closestStations = [];
    this.closestDistances = [];
    this.state = {
      dataSource: dataSourceTemplate,
      refreshing: false,
    };
    that = this;
  }

  componentDidMount() {
    this.refreshData(false);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.stations !== this.props.stations || nextProps.location !== this.props.location) {
      this.closestStations = [];
      this.closestDistances = [];

      for (const station of nextProps.stations) {
        const dLatitude = station.latitude - this.props.location.latitude;
        const dLongitude = station.longitude - this.props.location.longitude;
        const squaredDistance = (dLatitude * dLatitude) + (dLongitude * dLongitude);

        const furthestClosestDistance = this.closestDistances[this.closestDistances.length - 1];
        if (squaredDistance < furthestClosestDistance || this.closestStations.length < maxStations) {
          this.updateClosestStations(station, squaredDistance);
        }
      }
      this.state.dataSource = dataSourceTemplate.cloneWithRows(this.closestStations);
    }
  }

  getStationsList(changeRefreshingState = true) {
    CityBikes.getStationsList()
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

  refreshData(changeRefreshingState = true) {
    if (changeRefreshingState) that.setState({ refreshing: true });

    // First, get the user's current location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // Deal with the position here.
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        that.props.updateLocation(latitude, longitude);
        // Then retrieve the list of stations
        that.getStationsList(changeRefreshingState);
      },
      () => {
        // Then retrieve the list of stations
        that.getStationsList(changeRefreshingState);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }

  renderRow(rowData, sectionID, rowID) {
    return (
      <View key={`row-${sectionID}-${rowID}`}>
        <View style={styles.row}>
          <Text style={styles.text}>
            {rowData.extra.name}
          </Text>
        </View>
      </View>
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
      extra: React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
      }),
    }).isRequired),
  location: React.PropTypes.shape({
    latitude: React.PropTypes.number,
    longitude: React.PropTypes.number,
  }),
  updateStations: React.PropTypes.func,
};

export default StationList;
