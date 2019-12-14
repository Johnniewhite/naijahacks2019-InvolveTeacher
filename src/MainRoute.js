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
import Contentpage from './components/Contentpage';

export const history = createBrowserHistory();

const MainRouter = () => (
    <Router history = {history}>
    <div>
    <Switch>
    <PublicRoute path="/" component={ LandingPage }  exact={true} />
    <PrivateRoute path="/dashboard" component={ Dashboard }/>
    <PublicRoute path="/signup" component={ SignupPage } />
    <PublicRoute path="/login" component={ LoginPage } />
    <PrivateRoute path="/course/:id" component={SubjectItem} />
    <PrivateRoute path="/subtopics/:id" component={Subtopics} />
    <PrivateRoute path="/:ed" component={Contentpage} />
    <Route component={ ErrorPage } />
    </Switch>
    </div>
    </Router>
);

export default MainRouter