import { connect } from 'react-redux';
import StationDetail from '../../components/StationDetail/StationDetail';
import { reportBrokenBikes } from '../../actions/brokenBikes';

const mapStateToProps = (state) => ({
  stations: state.stations,
});
const mapDispatchToProps = {
  reportBrokenBikes,
};

const StationDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StationDetail);

export default StationDetailContainer;
