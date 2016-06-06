import { connect } from 'react-redux';
import StationList from '../../components/StationList/StationList';
import { updateStations } from '../../actions/stations';
import { updateLocation } from '../../actions/location';

const mapStateToProps = (state) => ({
  stations: state.stations,
  location: state.location,
});
const mapDispatchToProps = {
  updateStations,
  updateLocation,
};

const StationListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StationList);

export default StationListContainer;
