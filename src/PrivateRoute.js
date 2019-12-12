import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = props => {
  const auth = localStorage.getItem("auth");

  return auth ? <Route {...props} /> : <Redirect to="/" />;
};

export default PrivateRoute;
