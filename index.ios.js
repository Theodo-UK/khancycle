/**
 * KhanCycle by Theodo
 * https://github.com/Theodo-UK/khancycle
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App'

class KhanCycle extends Component {
  render() {
    return (<App />)
  }
}

AppRegistry.registerComponent('KhanCycle', () => KhanCycle);
