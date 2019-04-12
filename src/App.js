
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Router from "./routes";

import store from './store';
import { Provider } from "react-redux";

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
