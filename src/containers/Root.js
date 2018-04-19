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
  // Accounts,
  // HandleAccounts,
  // Employees,
  // Companies,
  // PrivateCustomers,
  // Profile,
  // IncomingOrders,
  // AddOrders,
  // HandleOrders,
  // CompletedOrders,
  // Complaints,
  // InternalOrders,
  // Login,
  // NotFoundPage
} from "../views";

const middleware = [thunk]; 

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware) 
);

const Root = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          {/* <Route exact path="/" component={Login} /> */}
          <Route path="/home" component={Home} />
          {/* <Route path="/admin/accounts" component={Accounts} />
          <Route path="/admin/accounts/handle" component={HandleAccounts} />
          <Route path="/admin/accounts/Profile" component={Profile} />
          <Route path="/admin/accounts/employees" component={Employees} />
          <Route path="/admin/accounts/customers/private" component={PrivateCustomers} />
          <Route path="/admin/accounts/customers/companies" component={Companies} />
          <Route path="/admin/orders/incoming" component={IncomingOrders} />
          <Route path="/admin/orders/add" component={AddOrders} />
          <Route path="/admin/orders/handle" component={HandleOrders} />
          <Route path="/admin/orders/completed" component={CompletedOrders} />
          <Route path="/admin/orders/complaints" component={Complaints} />
          <Route path="/admin/orders/internal" component={InternalOrders} />
          <Route path="/logout" component={Login} />
          <Route component={NotFoundPage} /> */}
        </Switch>
      </Router>
    </Provider>
  );
};

export default (Root);
