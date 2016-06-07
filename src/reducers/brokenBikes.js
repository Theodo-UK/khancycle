import { Map } from 'immutable';

const initialState = new Map();

function brokenBikes(state = initialState, action) {
  switch (action.type) {
    case 'BROKEN_REPORT_SUCCESS':
      return state.setIn([action.stationId, 'reported'], true);
    default:
      return state;
  }
}

export default brokenBikes;
