const initialState = [];

function location(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_LOCATION':
      return { longitude: action.longitude, latitude: action.latitude };
    default:
      return state;
  }
}

export default location;
