import { connect } from 'react-redux';
import Stations from '../../components/Stations/Stations';
import { updateStations, nearestStationsUpdated } from '../../actions/stations';
import { updateLocation } from '../../actions/location';

const mapStateToProps = (state) => ({
  stations: state.stations,
  nearestStations: state.nearestStations,
  location: state.location,
});
const mapDispatchToProps = {
  updateStations,
  nearestStationsUpdated,
  updateLocation,
};

const StationsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Stations);

export default StationsContainer;
