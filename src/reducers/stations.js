const initialState = [];

function stations(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_STATIONS':
      return action.stations;
    default:
      return state;
  }
}

export default stations;
