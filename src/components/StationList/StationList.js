import React, { Component } from 'react';
import { Text, View, ListView, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './StationList.style';

class StationList extends Component {
  constructor(props) {
    var dataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    super(props);
    this.state = {
      dataSource: dataSource.cloneWithRows(props.stations),
    };
  }


  renderRow(rowData, sectionID, rowID) {
    return (
      <TouchableHighlight onPress={Actions.stationDetail}>
        <View key={`row-${sectionID}-${rowID}`}>
          <View style={styles.row}>
            <Text style={styles.text}>
              {rowData.extra.name}
            </Text>
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
};

export default StationList;
