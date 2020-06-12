import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { theme } from './theme/theme';

import './App.css';
import configureStore from './reducers/index';
import store from "./store";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register2";
import Login from "./components/auth/Login";
import RecoverPassword from "./components/auth/RecoverPassword";
import UpdatePasswordForm from "./components/auth/UpdatePasswordForm";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import Profile from './components/dashboard/Profile'
import NavbarLogin from './components/dashboard/Navbar'
import CreateProfile from './components/dashboard/CreateProfile'
import EditProfile from './components/dashboard/EditProfile'
import { connect } from 'react-redux'
import Proptypes from 'prop-types'
store.subscribe(() => {
  console.log(store.getState());
});

// Check for token to keep user logged in
if (localStorage.user) {
  // Set auth token header auth
  const user = localStorage.user;

  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(JSON.parse(user)));
}



class App extends Component {
  render() {
    return (
      // <Provider store={store}>

      <div className="App">

        <Route exact path="/" component={Landing} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/password/recover" component={RecoverPassword} />
        <Route exact path="/password/reset" component={UpdatePasswordForm} />
        <Switch>
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/dashboard/profile" component={Profile} />
          <PrivateRoute exact path="/dashboard/profile/create-profile" component={CreateProfile} />
          <PrivateRoute exact path="/dashboard/profile/edit-profile" component={EditProfile} />
        </Switch>
      </div>

      // </Provider>
    );
  }
}

export default App;

