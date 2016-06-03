import { connect } from 'react-redux';
import StationDetail from '../../components/StationDetail/StationDetail';

const mapStateToProps = (state) => ({
  stations: state.stations,
});
const mapDispatchToProps = () => ({});

const StationDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StationDetail);

export default StationDetailContainer;
