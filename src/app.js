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
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { usePromiseTracker } from "react-promise-tracker";
import Loader from 'react-loader-spinner';


if ('serviceWorker' in navigator) {
     window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js').then(registration => {
        console.log('SW registered: ', registration);
      }).catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
    });
  }

const LoadingIndicator = props => {
  const { promiseInProgress } = usePromiseTracker();
  return (
    promiseInProgress &&
    <div
         style={{
          width: "100%",
          height: "100",
          display: "flex",
         justifyContent: "center",
          alignItems: "center"
        }}
      >
         <Loader type="ThreeDots" color="#ff8800" height="200" width="200" />
     </div>
  )
}

const store = configuration();

const Jsx = () => (
  <Provider store={store}>
    <MainRouter />
  </Provider>
);
ReactDom.render(<div><Jsx /><LoadingIndicator /></div>, document.getElementById("app"));
