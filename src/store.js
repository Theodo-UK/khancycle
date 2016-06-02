import rootReducer from './reducers/index';
import stations from './data/stations';

// Create an object for the default data
const defaultState = { stations };

// Create the store
const store = createStore(rootReducer, defaultState);

export default store;
