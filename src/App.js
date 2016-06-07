import { createStore, applyMiddleware } from 'redux';
import { Component } from 'react';
import rootReducer from './reducers/index';
import routes from './config/routes';
import * as firebase from './services/firebase';

// Create the default state and store
const defaultState = { stations: [], location: {} };
const store = applyMiddleware(firebase.middleware)(createStore)(rootReducer, defaultState);

class App extends Component {
  render() {
    return routes(store);
  }
}

export default App;
