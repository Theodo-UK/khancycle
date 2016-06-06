import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './StationListMap.style';

const jsx = () =>
  <View style={styles.container}>
    <Text>Map will go here</Text>
  </View>;

class StationListMap extends Component {
  render() {
    return jsx();
  }
}

export default StationListMap;
