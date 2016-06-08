import React, { Component } from 'react';
import styles from './StationListMap.style';
import Mapbox from 'react-native-mapbox-gl';

const jsx = (location) =>
  // Note that we need a centerCoordinate even if userTrackingMode is enabled
  // -- otherwise, Mapbox will ignore the zoom level.
  <Mapbox
    style={styles.map}
    accessToken="pk.eyJ1IjoidGhlb2RvdWsiLCJhIjoiY2lwNm55ZXdlMDAwaHVkbm05cDNtNzA3cCJ9.hhMg_ZQceBIAnEvd5tu6Hw"
    centerCoordinate={location}
    userTrackingMode={1}
    showsUserLocation
    zoomLevel={14}
  />;

class StationListMap extends Component {
  render() {
    const location = {
      latitude: parseFloat(this.props.location.latitude),
      longitude: parseFloat(this.props.location.longitude),
    };
    return jsx(location);
  }
}

StationListMap.mixins = [Mapbox.Mixin];

StationListMap.propTypes = {
  location: React.PropTypes.shape({
    latitude: React.PropTypes.number,
    longitude: React.PropTypes.number,
  }),
};

export default StationListMap;
