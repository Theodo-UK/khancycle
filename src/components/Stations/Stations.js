import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './Stations.style';
import StationListMap from '../StationListMap/StationListMap';
import StationList from '../StationList/StationList';

const jsx = props =>
  <View style={styles.container}>
    <StationListMap />
    <StationList {...props} />
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
  location: React.PropTypes.shape({
    latitude: React.PropTypes.number,
    longitude: React.PropTypes.number,
  }),
  updateStations: React.PropTypes.func,
};

export default Stations;
