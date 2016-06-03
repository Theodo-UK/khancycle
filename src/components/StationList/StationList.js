import React, { Component } from 'react';
import { Text, View, ListView, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
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

  componentWillReceiveProps(nextProps) {
    if (nextProps.stations !== this.props.stations) {
      this.dataSource = dataSourceTemplate.cloneWithRows(nextProps.stations);
    }
  }


  renderRow(rowData, sectionID, rowID) {
    const goToStationDetail = () => Actions.stationDetail({ rowData });
    return (
      <TouchableHighlight onPress={goToStationDetail}>
        <View key={`row-${sectionID}-${rowID}`}>
          <View style={styles.row}>
            <Text style={styles.stationName}>
              {rowData.extra.name}
            </Text>
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
