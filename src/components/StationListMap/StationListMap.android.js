import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './StationListMap.style';
import MapView from 'react-native-maps';

const jsx = () =>
  <View style={styles.container}>
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 51.5073,
        longitude: 0.1276,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  </View>;

class StationListMap extends Component {
  render() {
    return jsx();
  }
}

export default StationListMap;
