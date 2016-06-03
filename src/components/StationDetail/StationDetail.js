import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './StationDetail.style';
import ReportBrokenBikes from '../ReportBrokenBikes/ReportBrokenBikes';

const eslintWorkaraound = () => (
  <View style={styles.container}>
    <ReportBrokenBikes />
  </View>
);

class StationDetail extends Component {
  render() {
    return eslintWorkaraound();
  }
}

export default StationDetail;
