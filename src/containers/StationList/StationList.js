import { connect } from 'react-redux';
import StationList from '../../components/StationList/StationList';
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

const StationListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StationList);

export default StationListContainer;
