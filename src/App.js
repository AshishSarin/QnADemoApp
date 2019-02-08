import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'react-redux';
import Navigator from './navigation/Routes';

export default class QnADemoApp extends Component {

  render() {

    return (
      <Navigator />
    );

  }
}