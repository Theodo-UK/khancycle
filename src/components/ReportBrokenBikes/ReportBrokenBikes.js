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
      brokenBikes: 1,
    };
  }

  reportBrokenBikes() {
    if (that.state.reporting) {
      that.props.reportBrokenBikes(that.props.stationId, that.state.brokenBikes);
    }
    that.setState({
      reporting: !that.state.reporting,
    });
  }

  valueChange(value) {
    that.setState({
      brokenBikes: value,
    });
  }

  buttonText() {
    const notReporting = this.props.brokenReportSuccess ? 'Report submitted!' : 'Report Broken Bikes';
    return this.state.reporting ? 'Submit Report' : notReporting;
  }

  renderSelector() {
    return that.state.reporting ? (
      <View style={styles.sliderContainer}>
        <Slider
          style={styles.slider}
          onValueChange={that.valueChange}
          value={1}
          step={1}
          maximumValue={this.props.freeBikes}
        />
        <Text style={styles.controlText}>{that.state.brokenBikes}</Text>
      </View>
    ) :
      null;
  }

  render() {
    return (
      <View style={that.props.style}>
        {that.renderSelector()}
        <TouchableHighlight style={styles.wrapper} underlayColor="#cccccc" onPress={that.reportBrokenBikes}>
          <View style={styles.button}>
            <Text style={styles.controlText}>
              {that.buttonText()}
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

ReportBrokenBikes.propTypes = {
  style: View.propTypes.style,
  stationId: React.PropTypes.string,
  freeBikes: React.PropTypes.number,
  reportBrokenBikes: React.PropTypes.func,
  brokenReportSuccess: React.PropTypes.bool,
};

export default ReportBrokenBikes;
