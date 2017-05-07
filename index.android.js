/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import MapScreen from './mapscreen';

export default class Mapv extends Component {
  render() {
    return (
      <MapScreen/>
    );
  }
}


AppRegistry.registerComponent('Mapv', () => Mapv);
