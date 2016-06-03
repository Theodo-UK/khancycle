import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import styles from './ReportBrokenBikes.style';

class ReportBrokenBikes extends Component {
  reportBrokenBikes() {
    console.warn('reported!');
  }

  render() {
    return (
      <TouchableHighlight onPress={this.reportBrokenBikes}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>
            Report Broken Bikes
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

export default ReportBrokenBikes;
