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
  updateLocation: (longitude, latitude) => dispatch(locationActions.updateLocation(longitude, latitude)),
});

const StationListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StationList);

export default StationListContainer;
