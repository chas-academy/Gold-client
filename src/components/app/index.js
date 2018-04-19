import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import {
    Home,
    Accounts,
    HandleAccounts,
    Employees,
    Companies,
    PrivateCustomers,
    Profile,
    IncomingOrders,
    AddOrders,
    HandleOrders,
    CompletedOrders,
    Complaints,
    InternalOrders,
    Login,
    NotFoundPage
  } from "../../views";


class App extends Component {


  render() {


    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
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
          <Route component={NotFoundPage} />  */}
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
