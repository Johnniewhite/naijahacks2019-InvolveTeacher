import React from 'react'
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from "react-router-dom";
import CoursesListPage from "./components/CoursesListPage";
import Dashboard from './components/Dashboard';
import ErrorPage from './components/ErrorPage';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import SubjectItem from './components/SubjectItem';
import Subtopics from './components/Subtopics';

export const history = createBrowserHistory();

const MainRouter = () => (
    <Router history = {history}>
    <div>
    <Switch>
    <Route path="/" component={ LandingPage }  exact={true} />
    <PrivateRoute path="/dashboard" component={ Dashboard }/>
    <PublicRoute path="/signup" component={ SignupPage } />
    <Route path="/login" component={ LoginPage } />
    <PrivateRoute path="/courses" component={ CoursesListPage } />
    <PrivateRoute path="/course/:id" component={SubjectItem} />
    <PrivateRoute path="/:id" component={Subtopics} />
    <PublicRoute component={ ErrorPage } />
    </Switch>
    </div>
    </Router>
);

export default MainRouter