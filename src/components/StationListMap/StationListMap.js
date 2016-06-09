import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { List } from 'immutable';

import styles from './StationListMap.style';
import Mapbox from 'react-native-mapbox-gl';

// Note that Mapbox needs a centerCoordinate even if userTrackingMode is
// enabled -- otherwise, Mapbox will ignore the zoom level.
const jsx = (pros, location) =>
  <View style={styles.container}>
    <Mapbox
      style={styles.map}
      accessToken="pk.eyJ1IjoidGhlb2RvdWsiLCJhIjoiY2lwNm55ZXdlMDAwaHVkbm05cDNtNzA3cCJ9.hhMg_ZQceBIAnEvd5tu6Hw"
      centerCoordinate={location}
      userTrackingMode={1}
      showsUserLocation
      zoomLevel={14}
    />
    <Text>{pros.nearestStations.map(s => s.name).join('\n')}</Text>
  </View>;

class StationListMap extends Component {
  render() {
    const propsLocation = this.props.location;
    const location = {
      latitude: (propsLocation.latitude != null) ? propsLocation.latitude : 0,
      longitude: (propsLocation.longitude != null) ? propsLocation.longitude : 0,
    };
    return jsx(this.props, location);
  }
}

StationListMap.mixins = [Mapbox.Mixin];

StationListMap.propTypes = {
  nearestStations: React.PropTypes.instanceOf(List),
  location: React.PropTypes.shape({
    latitude: React.PropTypes.number,
    longitude: React.PropTypes.number,
  }),
};

export default StationListMap;
