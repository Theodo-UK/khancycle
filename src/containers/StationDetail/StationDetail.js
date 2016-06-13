import { connect } from 'react-redux';
import StationDetail from '../../components/StationDetail/StationDetail';
import { reportBrokenBikes } from '../../actions/brokenBikes';

const getMostRecentReport = list => {
  let mostRecentReport = undefined;
  if (list) {
    // to avoid crashing when dealing with data uploaded by old app
    if (list.get('timestamp')) {
      // most recent upload was from the old version of the app
      mostRecentReport = list;
    } else {
      // most recent report was from new version of the app
      mostRecentReport = list.max((reportA, reportB) =>
      reportA.get('timestamp') > reportB.get('timestamp'));
    }
  }
  return mostRecentReport;
};

export const mapStateToProps = (state, ownProps) => ({
  stations: state.stations,
  brokenReportSuccess: state.brokenBikes.getIn([ownProps.stationId, 'reported']),
  brokenBikes: state.brokenBikes &&
    getMostRecentReport(state.brokenBikes.getIn(['brokenBikeReports', ownProps.stationId])),
});
export const mapDispatchToProps = {
  reportBrokenBikes,
};

const StationDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StationDetail);

export default StationDetailContainer;
