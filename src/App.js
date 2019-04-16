import { Provider } from "react-redux";
import React, { Component } from "react";
import { SafeAreaView } from "react-native";

import configureStore from "./store";
import Router from "./routes";

const store = configureStore();
console.log(store, "store");

// eslint-disable-next-line
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView style={{ flex: 1 }}>
          <Router />
        </SafeAreaView>
      </Provider>
    );
  }
}
