import React from "react";
import ReactDom from "react-dom";
import configuration from "./store/configuration";
import MainRouter, { history } from "./MainRoute";
import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";
import "./store/configuration";
import { Provider } from "react-redux";
import "./styles/styles.scss";
import 'bootstrap/dist/css/bootstrap.min.css';


//serviceWorkers

if (navigator.serviceWorker) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("../public/serviceWorker.js")
      .then(reg => console.log("Service Workers"))
      .catch(err => console.log(`Service Worker: Error: ${err}`));
  });
}

const store = configuration();

const jsx = (
  <Provider store={store}>
    <MainRouter />
  </Provider>
);
ReactDom.render(jsx, document.getElementById("app"));
