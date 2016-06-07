import React, { Component } from 'react';
import { View, MapView } from 'react-native';
import styles from './StationListMap.style';

const jsx = () =>
  <View style={styles.container}>
    <MapView
      style={styles.map}
    />
  </View>;

class StationListMap extends Component {
  render() {
    return jsx();
  }
}

export default StationListMap;
