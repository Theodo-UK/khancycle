import React, { Component } from 'react';
import { Text, View, ListView, RefreshControl } from 'react-native';
import styles from './StationList.style';
import CityBikes from '../../services/CityBikes';

const dataSourceTemplate = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

class StationList extends Component {
  constructor(props) {
    super(props);
    this.dataSource = dataSourceTemplate;
    this.updateStations = props.updateStations;
    this.state = {
      dataSource: dataSourceTemplate,
      refreshing: false
    }
  }

  getStationsList(changeRefreshingState = true) {
    CityBikes.getStationsList()
      .then(
        (result) => {
          this.updateStations(result.network.stations);
          if (changeRefreshingState) this.setState({refreshing: false});
        }
      );
  }

  refreshData(changeRefreshingState = true) {
    if (changeRefreshingState) this.setState({refreshing: true});

    // First, get the user's current location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        var longitude = position.coords.longitude;
        var latitude = position.coords.latitude;
        // Then retrieve the list of stations
        this.getStationsList(changeRefreshingState);
      },
      (error) => {
        console.warn('Error!');
        // Then retrieve the list of stations
        this.getStationsList(changeRefreshingState);
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  }

  componentDidMount() {
    this.refreshData(false);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.stations !== this.props.stations) {
      this.state.dataSource = dataSourceTemplate.cloneWithRows(nextProps.stations);
    }
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
            onRefresh={this.refreshData.bind(this)}
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
  updateStations: React.PropTypes.func,
};

export default StationList;
