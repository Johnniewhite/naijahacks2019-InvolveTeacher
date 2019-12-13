import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Header from "./components/Header";
import { Container} from "react-bootstrap";

const PrivateRoute = props => {
  const auth = localStorage.getItem("auth");

  return  (
    auth ?
    <div>
    <Container-fluid>
    <Header /> <Route {...props} />{" "}
    </Container-fluid>
    </div>
   : 
    <Redirect to="/" />
  );
};

export default PrivateRoute;
