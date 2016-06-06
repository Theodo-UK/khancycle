import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './StationDetail.style';
import ReportBrokenBikes from '../ReportBrokenBikes/ReportBrokenBikes';

class StationDetail extends Component {
  componentWillMount() {
    Actions.refresh({ title: this.props.title });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.details}>
          <Text>
            <Text style={styles.detailLabel}>Bikes: </Text>
            <Text style={styles.detailNumber}>{this.props.freeBikes}</Text>
          </Text>
          <Text>
            <Text style={styles.detailLabel}>Spaces: </Text>
            <Text style={styles.detailNumber}>{this.props.emptySlots}</Text>
          </Text>
        </View>
        <ReportBrokenBikes freeBikes={this.props.freeBikes} />
      </View>
    );
  }
}

StationDetail.propTypes = {
  title: React.PropTypes.string,
  freeBikes: React.PropTypes.number,
  emptySlots: React.PropTypes.number,
};

export default StationDetail;
