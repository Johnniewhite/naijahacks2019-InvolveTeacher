import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ErrorPage from './components/ErrorPage';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';

const MainRouter = () => (
    <BrowserRouter>
    <div>
    <Switch>
    <Route path="/" component={ LandingPage }  exact={true} />
    <Route path="/dashboard" component={ Dashboard }/>
    <Route path="/signup" component={ SignupPage } />
    <Route path="/login" component={ LoginPage } />
    <Route component={ ErrorPage } />
    </Switch>
    </div>
    </BrowserRouter>
);

export default MainRouter