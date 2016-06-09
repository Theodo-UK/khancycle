import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Map } from 'immutable';
import moment from 'moment';

import styles from './StationDetail.style';
import ReportBrokenBikes from '../ReportBrokenBikes/ReportBrokenBikes';

class StationDetail extends Component {
  componentWillMount() {
    Actions.refresh({ title: this.props.title });
  }

  renderBrokenBikeReport(report) {
    return (
      <View style={styles.brokenDetail}>
        <Text>
          Broken Bikes: {report.get('number')} (reported {moment(report.get('timestamp')).fromNow()})
        </Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.details}>
          <View>
            <Text>
              <Text style={styles.detailLabel}>Bikes: </Text>
              <Text style={styles.detailNumber}>{this.props.freeBikes}</Text>
            </Text>
          </View>
          <Text>
            <Text style={styles.detailLabel}>Spaces: </Text>
            <Text style={styles.detailNumber}>{this.props.emptySlots}</Text>
          </Text>
        </View>
        {this.props.brokenBikes ? this.renderBrokenBikeReport(this.props.brokenBikes) : null}
        <ReportBrokenBikes
          stationId={this.props.stationId}
          freeBikes={this.props.freeBikes}
          reportBrokenBikes={this.props.reportBrokenBikes}
          brokenReportSuccess={this.props.brokenReportSuccess}
          style={styles.reportBrokenBikes}
        />
      </View>
    );
  }
}

StationDetail.propTypes = {
  stationId: React.PropTypes.string,
  title: React.PropTypes.string,
  freeBikes: React.PropTypes.number,
  emptySlots: React.PropTypes.number,
  reportBrokenBikes: React.PropTypes.func,
  brokenReportSuccess: React.PropTypes.bool,
  brokenBikes: React.PropTypes.instanceOf(Map),
};

export default StationDetail;
