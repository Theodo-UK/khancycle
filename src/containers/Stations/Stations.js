import { connect } from 'react-redux';
import Stations from '../../components/Stations/Stations';
import * as stationsActions from '../../actions/stations';
import * as locationActions from '../../actions/location';

const mapStateToProps = (state) => ({
  stations: state.stations,
  location: state.location,
});
const mapDispatchToProps = (dispatch) => ({
  updateStations: (stations) => dispatch(stationsActions.updateStations(stations)),
  updateLocation: (latitude, longitude) => dispatch(locationActions.updateLocation(latitude, longitude)),
});

const StationsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Stations);

export default StationsContainer;
