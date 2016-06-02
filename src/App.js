// import { createStore } from 'redux';
import React, { Component } from 'react';
import Home from './components/Home/Home';
// import rootReducer from './reducers/index';
// import stations from './data/stations';

// Create the default state and store
// const defaultState = { stations };
// const store = createStore(rootReducer, defaultState);

const homeElement = function () {
  return <Home />;
};

class App extends Component {
  render() {
    return homeElement();
  }
}

export default App;
