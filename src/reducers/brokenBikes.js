import { Map } from 'immutable';

const initialState = new Map();

function brokenBikes(state = initialState, action) {
  switch (action.type) {
    case 'REPORT_BROKEN':
      return state.set(action.station, action.number);
    default:
      return state;
  }
}

export default brokenBikes;
