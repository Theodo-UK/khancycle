import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './StationListMap.style';
import MapView from 'react-native-maps';

const jsx = () =>
  <View style={styles.container}>
    <View style={styles.mapContainer}>
      <MapView style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  </View>;

class StationListMap extends Component {
  render() {
    return jsx();
  }
}

export default StationListMap;
