import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import { HashRouter } from "react-router-dom";

import App from "./App";
import { setTheme } from "./app/shared/utils/theme";
import * as serviceWorker from "./serviceWorker";
import { store } from "./store";

import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
setTheme(localStorage.theme);
