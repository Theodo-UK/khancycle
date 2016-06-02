import { connect } from 'react-redux';
import StationList from '../../components/StationList/StationList';
import * as stationsActions from '../../actions/stations';

const mapStateToProps = (state) => ({
  stations: state.stations,
});
const mapDispatchToProps = (dispatch) => ({
  updateStations: (stations) => dispatch(stationsActions.updateStations(stations)),
});

const StationListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StationList);

export default StationListContainer;
