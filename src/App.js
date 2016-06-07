import { createStore, applyMiddleware } from 'redux';
import { Component } from 'react';
import thunk from 'redux-thunk';

import rootReducer from './reducers/index';
import routes from './config/routes';

// Create the default state and store
const defaultState = { stations: [], location: {} };
const store = applyMiddleware(thunk)(createStore)(rootReducer, defaultState);

class App extends Component {
  render() {
    return routes(store);
  }
}

export default App;
