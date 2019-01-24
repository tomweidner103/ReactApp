import React, { Component } from "react";
import "./App.css";
import { AppRegistry } from "react-native";
import { HashRouter, Route } from "react-router-dom";
import Main from "./components/Main";

export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <Route exact path="/" component={Main} />
      </HashRouter>
    );
  }
}

// register the app
AppRegistry.registerComponent("App", () => App);

AppRegistry.runApplication("App", {
  initialProps: {},
  rootTag: document.getElementById("root")
});
