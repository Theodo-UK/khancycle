import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { List } from 'immutable';

import styles from './StationListMap.style';
import Mapbox from 'react-native-mapbox-gl';

const jsx = pros =>
  <View style={styles.container}>
    <Mapbox
      style={styles.map}
      accessToken="pk.eyJ1IjoidGhlb2RvdWsiLCJhIjoiY2lwNm55ZXdlMDAwaHVkbm05cDNtNzA3cCJ9.hhMg_ZQceBIAnEvd5tu6Hw"
      centerCoordinate={{ latitude: 51.5073, longitude: -0.1276 }}
      zoomLevel={14}
    />
    <Text>{pros.nearestStations.map(s => s.name).join('\n')}</Text>
  </View>;

class StationListMap extends Component {
  render() {
    return jsx(this.props);
  }
}


StationListMap.propTypes = {
  nearestStations: React.PropTypes.instanceOf(List),
};

StationListMap.mixins = [Mapbox.Mixin];

export default StationListMap;
