import { connect } from 'react-redux';
import StationList from '../../components/StationList/StationList';

const mapStateToProps = (state) => ({
  stations: state.stations,
});
const mapDispatchToProps = () => ({});

const StationListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StationList);

export default StationListContainer;
