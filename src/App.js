
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Router from "./routes";

import store from './store';
import { Provider } from "react-redux";
// import {createRootNavigator} from "./routes";

export default class App extends Component {
  render () {
    // const Layout = createRootNavigator();
    // console.log(Layout, '<><><><><><><><><>')
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
