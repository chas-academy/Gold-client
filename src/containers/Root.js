<<<<<<< HEAD
import React from "react";
import { createStore, applyMiddleware } from "redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import rootReducer from "../redux/reducers";

import {
  Home,
  Accounts,
  CreateAccounts,
  IncomingOrders,
  AddOrders,
  HandleOrders,
  CompletedOrders,
  Complaints,
  InternalOrders,
  Login,
  NotFoundPage
} from "../views";
=======
import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import rootReducer from '../redux/reducers'
import { App } from '../components'

>>>>>>> origin/master

const middleware = [thunk]; 

const store = createStore(
  rootReducer,
<<<<<<< HEAD
=======
  // //this is for checking states in store in redux in browser pretty useful..
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
>>>>>>> origin/master
  applyMiddleware(...middleware) 
);

const Root = () => {
  return (
    <Provider store={store}>
      <Router>
<<<<<<< HEAD
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/admin/accounts" component={Accounts} />
          <Route path="/admin/accounts/create" component={CreateAccounts} />
          <Route path="/admin/orders/incoming" component={IncomingOrders} />
          <Route path="/admin/orders/add" component={AddOrders} />
          <Route path="/admin/orders/handle" component={HandleOrders} />
          <Route path="/admin/orders/completed" component={CompletedOrders} />
          <Route path="/admin/orders/complaints" component={Complaints} />
          <Route path="/admin/orders/internal" component={InternalOrders} />
          <Route path="/logout" component={Login} />
          <Route component={NotFoundPage} />
        </Switch>
=======
          <Route path='/' component={App} />
>>>>>>> origin/master
      </Router>
    </Provider>
  );
};

<<<<<<< HEAD
export default (Root);
=======
export default Root
>>>>>>> origin/master
