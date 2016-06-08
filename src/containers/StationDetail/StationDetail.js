import { connect } from 'react-redux';
import { Map } from 'immutable';
import StationDetail from '../../components/StationDetail/StationDetail';
import { reportBrokenBikes } from '../../actions/brokenBikes';

const date = (new Date()).toISOString();
const mapStateToProps = (state, ownProps) => ({
  stations: state.stations,
  brokenReportSuccess: state.brokenBikes.getIn([ownProps.stationId, 'reported']),
  brokenBikes: new Map({ timestamp: date, number: 3 }),
});
const mapDispatchToProps = {
  reportBrokenBikes,
};

const StationDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StationDetail);

export default StationDetailContainer;
