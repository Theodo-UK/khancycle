import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './StationListMap.style';
import MapView from 'react-native-maps';

const jsx = (initialRegion) => {
  let jsxView = null;
  if (initialRegion != null) {
    const coordinate = { latitude: initialRegion.latitude, longitude: initialRegion.longitude };
    jsxView = (
      <View style={styles.container}>
        <MapView style={styles.map} initialRegion={initialRegion}>
          <MapView.Marker
            coordinate={coordinate}
            title={"Current Location"}
            pinColor={"#0000ff"}
          />
        </MapView>
      </View>
    );
  } else {
    jsxView = (
      <View style={styles.container}>
        <MapView style={styles.map} initialRegion={initialRegion} />
      </View>
    );
  }
  return jsxView;
};

class StationListMap extends Component {
  render() {
    const location = this.props.location;
    let initialRegion = null;
    if (location.latitude != null && location.longitude != null) {
      initialRegion = {
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      };
    }
    return jsx(initialRegion);
  }
}

StationListMap.propTypes = {
  location: React.PropTypes.shape({
    latitude: React.PropTypes.number,
    longitude: React.PropTypes.number,
  }),
};

export default StationListMap;
