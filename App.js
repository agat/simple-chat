// @flow

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Auth from './src/screens/Auth';

export default class App extends React.Component {
  render() {
    return (
      <Auth />
    );
  }
}

const a: string = 42;

a = 'test';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
