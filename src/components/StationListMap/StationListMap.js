import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { List } from 'immutable';

import styles from './StationListMap.style';
import Mapbox from 'react-native-mapbox-gl';

const mapRef = 'mapRef';
// Note that Mapbox needs a centerCoordinate even if userTrackingMode is
// enabled -- otherwise, Mapbox will ignore the zoom level.
const jsx = (annotations, location) =>
  <Mapbox
    ref={mapRef}
    style={styles.map}
    accessToken="pk.eyJ1IjoidGhlb2RvdWsiLCJhIjoiY2lwNm55ZXdlMDAwaHVkbm05cDNtNzA3cCJ9.hhMg_ZQceBIAnEvd5tu6Hw"
    centerCoordinate={location}
    userTrackingMode={1}
    showsUserLocation
    zoomLevel={14}
    annotations={annotations}
  />;

class StationListMap extends Component {
  render() {
    const propsLocation = this.props.location;
    const location = {
      latitude: (propsLocation.latitude != null) ? propsLocation.latitude : 0,
      longitude: (propsLocation.longitude != null) ? propsLocation.longitude : 0,
    };
    let annotations = this.props.nearestStations
      .map(st =>this.stationToAnnotation(st))
      .toArray();
    return jsx(annotations, location);
  }
  stationToAnnotation(station) {
    let [stationId, stationName] = station.name.split(' - ');
    return {
      id: stationId,
      title: stationName,
      coordinates: [station.latitude, station.longitude],
      subtitle: `Bikes: ${station.free_bikes}, spaces: ${station.empty_slots}`,
      type: 'point',
    }
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
