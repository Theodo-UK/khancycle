import React, { Component } from 'react';
import { Text, View, ListView } from 'react-native';
import styles from './StationList.style';
import CityBikes from '../../services/CityBikes';

const dataSourceTemplate = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

class StationList extends Component {
  constructor(props) {
    super(props);
    // Populate view with existing stations
    this.dataSource = dataSourceTemplate.cloneWithRows(props.stations);

    // Refresh list of stations via CityBikes API.
    CityBikes.get('networks/barclays-cycle-hire', 'fields=stations')
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
