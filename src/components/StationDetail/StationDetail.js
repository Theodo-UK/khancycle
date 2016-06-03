import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './StationDetail.style';

class StationDetail extends Component {
  componentWillMount() {
    Actions.refresh({ title: this.props.title });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.detail}>Bikes: {this.props.free_bikes}</Text>
        <Text style={styles.detail}>Spaces: {this.props.empty_slots}</Text>
      </View>
    );
  }
}

StationDetail.propTypes = {
  title: React.PropTypes.string,
  free_bikes: React.PropTypes.number,
  empty_slots: React.PropTypes.number,
};

export default StationDetail;
