import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Router } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

// import "bootstrap-css-only/css/bootstrap.min.css";
// import "mdbreact/dist/css/mdb.css";
import { Provider } from "react-redux";
import store from './store'
import {ApolloProvider} from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost'
import history from './history'
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
const client = new ApolloClient({
  link : createHttpLink({
    uri: 'https://vieuth-backend.herokuapp.com/graphql',
    credentials: 'same-origin'
  }),
  cache: new InMemoryCache()
});
ReactDOM.render(
  <React.StrictMode>
  <ApolloProvider client={client}>
  
    <Provider store={store}>
      {/* <Router history={history}> */}
      <App />
      {/* </Router> */}
    </Provider>
  
  </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
