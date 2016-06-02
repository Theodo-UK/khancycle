import React, { Component } from 'react';
import { Text, View, ListView } from 'react-native';
import styles from './StationList.style';
import CityBikes from '../../services/CityBikes';

const dataSourceTemplate = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

class StationList extends Component {
  constructor(props) {
    super(props);
    this.dataSource = dataSourceTemplate;

    // Refresh list of stations via CityBikes API.
    CityBikes.getStationsList()
      .then(
        (result) => { props.updateStations(result.network.stations); }
      );
  }

  componentDidMount() {
    // Get the user's current location.
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.warn(position.coords.longitude);
        console.warn(position.coords.latitude);
      },
      (error) => {
        console.warn('Error!');
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.stations !== this.props.stations) {
      this.dataSource = dataSourceTemplate.cloneWithRows(nextProps.stations);
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
        style={styles.container}
        dataSource={this.dataSource}
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
