const initialState = [];

function location(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_LOCATION':
      return { latitude: action.latitude, longitude: action.longitude };
    default:
      return state;
  }
}

export default location;
