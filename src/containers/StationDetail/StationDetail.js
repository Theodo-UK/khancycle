import { connect } from 'react-redux';
import StationDetail from '../../components/StationDetail/StationDetail';
import { reportBrokenBikes } from '../../actions/brokenBikes';

const mapStateToProps = (state, ownProps) => ({
  stations: state.stations,
  brokenReportSuccess: state.brokenBikes.getIn([ownProps.stationId, 'reported']),
  brokenBikes: state.brokenBikes && state.brokenBikes.getIn(['brokenBikeReports', ownProps.stationId]),
});
const mapDispatchToProps = {
  reportBrokenBikes,
};

const StationDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StationDetail);

export default StationDetailContainer;
