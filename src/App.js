import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { theme } from './theme/theme';

import './App.css';
import configureStore from './reducers/index';
import store from "./store";

import NavbarPage from './components/CommonLayout copy/Navbar'
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/LoginNew";
import RecoverPassword from "./components/auth/RecoverPassword";
import UpdatePasswordForm from "./components/auth/UpdatePasswordForm";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import Profile from './components/dashboard/Profile'
import NavbarLogin from './components/dashboard/Navbar'
import CreateProfile from './components/dashboard/CreateProfile'
import EditProfile from './components/dashboard/EditProfile'
import {ApolloProvider} from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost'
import Projects from './components/dashboard/Projects'
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
// const client=new ApolloClient({
//   uri:'https://vieuth-backend.herokuapp.com/graphql'
// })

// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const getToken = JSON.parse(localStorage.getItem('user').token);
//   const token=JSON.stringify(getToken);
//   console.log("getToken"+token)
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     }
//   }
// });


class App extends Component {
 
  render() {
    return (
      // <Provider store={store}>
      
      <BrowserRouter>
        <div >
          {console.log(localStorage.getItem('user')+"In App.js File")}
          <NavbarPage />
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
            <PrivateRoute exact path="/dashboard/projects" component={Projects} />
          </Switch>
        </div>
      </BrowserRouter>
    
      // </Provider>
    );
  }
}

export default App;

