import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import store from "stores/store";

import { Application } from "./application";

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById("root")
);
