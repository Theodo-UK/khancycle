/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';
import Home from './src/components/Home/Home'

class KhanCycle extends Component {
  render() {
    return (<Home />)
  }
}

AppRegistry.registerComponent('KhanCycle', () => KhanCycle);
