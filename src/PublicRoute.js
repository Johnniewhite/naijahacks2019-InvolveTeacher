import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = props => {
  const auth = localStorage.getItem("auth");
  return (
    auth ? <Redirect to="/dashboard" /> : <Route {...props} />
  ) 
};

export default PublicRoute
