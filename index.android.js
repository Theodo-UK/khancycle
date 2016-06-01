/**
 * KhanCycle by Theodo
 * https://github.com/Theodo-UK/khancycle
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Home from './src/components/Home/Home'

class KhanCycle extends Component {
  render() {
    return (<Home />)
  }
}

AppRegistry.registerComponent('KhanCycle', () => KhanCycle);
