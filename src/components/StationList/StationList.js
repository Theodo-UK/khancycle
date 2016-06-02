import React, { Component } from 'react';
import { Text, View, ListView } from 'react-native';
import styles from './StationList.style';

class StationList extends Component {
  constructor(props) {
    var dataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    super(props);
    this.state = {
      dataSource: dataSource.cloneWithRows(['Bike Station 1', 'Bike Station 2']),
    };
  }

  renderRow(rowData, sectionID, rowID) {
    return (
      <View key={`row-${sectionID}-${rowID}`}>
        <View style={styles.row}>
          <Text style={styles.text}>
            {rowData}
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
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        renderSeparator={this.renderSeparator}
      />
    );
  }
}

export default StationList;
