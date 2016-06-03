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
        <Text>
          <Text style={styles.detailLabel}>Bikes: </Text>
          <Text style={styles.detailNumber}>{this.props.free_bikes}</Text>
        </Text>

        <Text>
          <Text style={styles.detailLabel}>Spaces: </Text>
          <Text style={styles.detailNumber}>{this.props.empty_slots}</Text>
        </Text>
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
