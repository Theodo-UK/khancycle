import React, { Component } from 'react';
import { Text, View, TouchableHighlight, Slider } from 'react-native';
import styles from './ReportBrokenBikes.style';

let that;

class ReportBrokenBikes extends Component {
  constructor() {
    super();
    that = this;
    that.state = {
      reporting: false,
      brokenBikes: 0,
    };
  }

  reportBrokenBikes() {
    that.setState({
      reporting: !that.state.reporting,
    });
  }

  valueChange(value) {
    that.setState({
      brokenBikes: value,
    });
  }

  // <Text>0</Text>
  renderSelector() {
    return that.state.reporting ? (
      <View style={styles.sliderContainer}>
        <Slider style={styles.slider} onValueChange={that.valueChange} value={0} step={1} maximumValue={5} />
        <Text style={styles.controlText}>{that.state.brokenBikes}</Text>
      </View>
    ) :
      null;
  }

  render() {
    return (
      <View>
        {that.renderSelector()}
        <TouchableHighlight style={styles.wrapper} underlayColor="#cccccc" onPress={that.reportBrokenBikes}>
          <View style={styles.button}>
            <Text style={styles.controlText}>
              Report Broken Bikes
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

export default ReportBrokenBikes;
