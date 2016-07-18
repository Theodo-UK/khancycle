/**
 * KhanCycle by Theodo
 * https://github.com/Theodo-UK/khancycle
 */

import React, { Component } from 'react';
import { AppRegistry, BackAndroid } from 'react-native';
import { Actions } from 'react-native-router-flux';

import App from './src/App';

BackAndroid.addEventListener('hardwareBackPress', () => {
  Actions.pop();
  return true;
});

class KhanCycle extends Component {
  render() {
    return (<App />);
  }
}

AppRegistry.registerComponent('KhanCycle', () => KhanCycle);
