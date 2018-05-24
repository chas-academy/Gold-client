import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'

import {
  AddComplaints,
  AddInternalOrders,
  AddOrders,
  AssignedOrders,
  Companies,
  Complaints,
  CompletedOrders,
  CustomerContact,
  CustomerComplaints,
  CustomerHistory,
  CustomerOrders,
  CustomerOrderDetails,
  CustomerProfile,
  CreateUsers,
  CreateCustomers,
  EmployeeHistory,
  EmployeeIncoming,
  EmployeeInternal,
  EmployeeOrderView,
  EmployeeProfile,
  Employees,
  HandleAccounts,
  Home,
  IncomingServices,
  InternalOrders,
  Login,
  Order,
  Orders,
  NotFoundPage,
  PrivateCustomers,
  Profile,
  } from '../../views'


class App extends Component {

  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/home' component={Home} />
          <Route path='/admin/accounts/create' component={CreateUsers}/>
          <Route path='/admin/accounts/profile' component={Profile} />  
          <Route path='/admin/accounts/customers/private' component={PrivateCustomers} />
          <Route path='/admin/accounts/customers/companies' component={Companies} />
          <Route path='/admin/accounts/customers/create' component={CreateCustomers} />
          <Route path='/admin/accounts/:user/:id' component={HandleAccounts} />
          <Route path='/admin/accounts/employees' component={Employees} />
          <Route path='/admin/services/incoming' component={IncomingServices} />
          <Route path='/admin/services/assigned' component={AssignedOrders} />
          <Route path='/admin/services/completed' component={CompletedOrders} />
          <Route path='/admin/services/:id' component={Order} />
          <Route path='/admin/orders/add' component={AddOrders} />
          <Route path='/admin/orders/complaints/add' component={AddComplaints} />
          <Route path='/admin/orders/complaints' component={Complaints} />
          <Route path='/admin/orders/internal/add' component={AddInternalOrders} />
          <Route path='/admin/orders/internal' component={InternalOrders} />
          <Route path='/admin/orders' component={Orders} />
          <Route path='/employee/history' component={EmployeeHistory} />
          <Route path='/employee/profile' component={EmployeeProfile} />
          <Route path='/employee/internal' component={EmployeeInternal} />
          <Route path='/employee/incoming' component={EmployeeIncoming} />
          <Route path='/employee/services/:id' component={EmployeeOrderView} />
          <Route path='/profile' component={CustomerProfile} />
          <Route path='/complaints/:id' component={CustomerComplaints} />
          <Route path='/complaints' component={CustomerComplaints} />
          <Route path='/history' component={CustomerHistory} />
          <Route path='/orders/add' component={CustomerOrders} />
          <Route path='/services/:id' component={CustomerOrderDetails} />
          <Route path='/contact' component={CustomerContact} />
          <Route path='/logout' component={Login} />
          <Route component={NotFoundPage} />  
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
