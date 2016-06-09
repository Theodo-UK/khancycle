import React, { Component } from 'react';
import { View } from 'react-native';
import { List } from 'immutable';

import styles from './Stations.style';
import StationListMap from '../StationListMap/StationListMap';
import StationList from '../StationList/StationList';

const jsx = pros =>
  <View style={styles.container}>
    <StationListMap {...pros} />
    <StationList {...pros} />
  </View>;

class Stations extends Component {
  render() {
    return jsx(this.props);
  }
}

Stations.propTypes = {
  stations: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      extra: React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
      }),
    }).isRequired),
  nearestStations: React.PropTypes.instanceOf(List),
  location: React.PropTypes.shape({
    latitude: React.PropTypes.number,
    longitude: React.PropTypes.number,
  }),
  updateStations: React.PropTypes.func,
  nearestStationsUpdated: React.PropTypes.func,
};

export default Stations;
