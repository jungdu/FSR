import React, { Component } from "react";
import "./App.css";
import {
  Header,
  ImgContainer,
  MainContainer,
  Footer,
  FontContainer,
  SoundContainer,
  TableContainer
} from "./Components";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import { Provider } from "react-redux";

const store = require("./reducers/storeCreator").init();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Header />
            <Switch>
              <Route path="/" exact render={() => <Redirect to="/main" />} />
              <Route path="/main" exact component={MainContainer} />
              <Route path="/imgsites" component={ImgContainer} />
              <Route path="/soundsites" component={SoundContainer} />
              <Route path="/fontsites" component={FontContainer} />
              <Route path="/tables" component={TableContainer} />
              <Route render={() => <Redirect to="/main" />} />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
