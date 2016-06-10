import { fromJS, Map } from 'immutable';

const initialState = new Map();

function brokenBikes(state = initialState, action) {
  switch (action.type) {
    case 'BROKEN_REPORT_SUCCESS':
      return state.setIn([action.stationId, 'reported'], true);
    case 'BROKEN_REPORTS_UPDATED':
      return state.set('brokenBikeReports', fromJS(action.brokenBikeReports));
    default:
      return state;
  }
}

export default brokenBikes;
