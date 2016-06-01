import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { ListView } from 'react-native';
import styles from './StationList.style';

class StationList extends Component {
  constructor(props) {
    super(props);
    var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: dataSource.cloneWithRows(['Bike Station 1', 'Bike Station 2']),
    };
  };

  renderRow(rowData, sectionID, rowID) {
    return (
      <View>
        <View style={styles.row}>
          <Text style={styles.text}>
            {rowData}
          </Text>
        </View>
      </View>
    );
  };

  renderSeparator(sectionID, rowID) {
    return(
      <View key={`${sectionID}-${rowID}`} style={styles.separator} />
    );
  }

  render() {
    return (
      <ListView style={styles.listView}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        renderSeparator={this.renderSeparator}
      />
    );
  };
}

export default StationList;
