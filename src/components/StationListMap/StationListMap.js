import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './StationListMap.style';
import Mapbox from 'react-native-mapbox-gl';

const jsx = () =>
    <Mapbox
      style={styles.map}
      accessToken='pk.eyJ1IjoidGhlb2RvdWsiLCJhIjoiY2lwNm55ZXdlMDAwaHVkbm05cDNtNzA3cCJ9.hhMg_ZQceBIAnEvd5tu6Hw'
      centerCoordinate={ { latitude: 51.5073, longitude: -0.1276 } }
      zoomLevel={14}
    />;

class StationListMap extends Component {
  render() {
    return jsx();
  }
}

StationListMap.mixins = [Mapbox.Mixin];

export default StationListMap;
