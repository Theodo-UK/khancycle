import React, { Component } from 'react';
import { List } from 'immutable';
import Mapbox from 'react-native-mapbox-gl';
import reactMixin from 'react-mixin';

import styles from './StationListMap.style';

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
    annotations={annotations}
  />;

class StationListMap extends Component {
  componentDidUpdate() {
    const stations = this.props.nearestStations;
    const location = this.props.location;
    if (stations.size) {
      const latitudes = stations.map(s => s.latitude).toArray();
      const longitudes = stations.map(s => s.longitude).toArray();
      // include the current location in the bounding box
      if (location.latitude) { latitudes.push(location.latitude); }
      if (location.longitude) { longitudes.push(location.longitude); }
      // setVisibleCoordinateBoundsAnimated comes from Mapbox.Mixin
      this.setVisibleCoordinateBoundsAnimated(
        mapRef,
        // SW corner of bounding box
        Math.min(...latitudes), Math.min(...longitudes),
        // NE corner of bounding box
        Math.max(...latitudes), Math.max(...longitudes),
        // padding - top needs more so it's not under header
        100, 50, 50, 50
      );
    }
  }
  stationToAnnotation(station) {
    const [stationId, stationName] = station.name.split(' - ');
    return {
      id: stationId,
      title: stationName,
      coordinates: [station.latitude, station.longitude],
      subtitle: `Bikes: ${station.free_bikes}, spaces: ${station.empty_slots}`,
      type: 'point',
    };
  }
  render() {
    const propsLocation = this.props.location;
    const location = {
      latitude: (propsLocation.latitude != null) ? propsLocation.latitude : 0,
      longitude: (propsLocation.longitude != null) ? propsLocation.longitude : 0,
    };
    const annotations = this.props.nearestStations
    .map(st => this.stationToAnnotation(st))
    .toArray();
    return jsx(annotations, location);
  }
}

reactMixin(StationListMap.prototype, Mapbox.Mixin);

StationListMap.propTypes = {
  nearestStations: React.PropTypes.instanceOf(List),
  location: React.PropTypes.shape({
    latitude: React.PropTypes.number,
    longitude: React.PropTypes.number,
  }),
};

export default StationListMap;
