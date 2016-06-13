import { connect } from 'react-redux';
import StationDetail from '../../components/StationDetail/StationDetail';
import { reportBrokenBikes } from '../../actions/brokenBikes';
import { Map } from 'immutable';

const getMostRecentReport = list => list && list
  .filter(report => Map.isMap(report))
  .max((reportA, reportB) => reportA.get('timestamp') > reportB.get('timestamp')
);

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
