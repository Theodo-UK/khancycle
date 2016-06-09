import { List } from 'immutable';

const initialState = new List();

function nearestStations(state = initialState, action) {
  switch (action.type) {
    case 'NEAREST_STATIONS_UPDATED':
      return new List(action.nearestStations);
    default:
      return state;
  }
}

export default nearestStations;
