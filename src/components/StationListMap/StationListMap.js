import React, { Component } from 'react';
import { Text, View, MapView } from 'react-native';
import styles from './StationListMap.style';

const jsx = () =>
  <View style={styles.container}>
    <MapView
      style={styles.map}
      showsUserLocation={true}
      followUserLocation={true}
    />
  </View>;

class StationListMap extends Component {
  render() {
    return jsx();
  }
}

export default StationListMap;
