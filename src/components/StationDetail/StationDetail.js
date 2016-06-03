import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './StationDetail.style';

class StationDetail extends Component {
  componentWillMount() {
    Actions.refresh({ title: this.props.rowData.extra.name });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.detail}>Bikes: {this.props.rowData.free_bikes}</Text>
        <Text style={styles.detail}>Spaces: {this.props.rowData.empty_slots}</Text>
      </View>
    );
  }
}

export default StationDetail;
