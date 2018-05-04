import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'

import {
  AddComplaints,
  AddInternalOrders,
  AddOrders,
  ActiveOrders,
  Companies,
  Complaints,
  CompletedOrders,
  CustomerContact,
  CustomerComplaints,
  CustomerHistory,
  CustomerOrders,
  CustomerOrderDetails,
  CustomerProfile,
  EmployeeActive,
  EmployeeHistory,
  EmployeeIncoming,
  EmployeeOrderView,
  Employees,
  HandleAccounts,
  HandleOrders,
  Home,
  IncomingOrders,
  InternalOrders,
  Login,
  Order,
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
          <Route path='/admin/accounts/employees/:userId' component={HandleAccounts}/>
          <Route path='/admin/accounts/add' component={HandleAccounts}/>
          <Route path='/admin/accounts/profile' component={Profile} />  
          <Route path='/admin/accounts/employees' component={Employees} />
          <Route path='/admin/accounts/customers/private/:userId' component={HandleAccounts}/>
          <Route path='/admin/accounts/customers/private' component={PrivateCustomers} />
          <Route path='/admin/accounts/customers/companies/:userId' component={HandleAccounts}/>
          <Route path='/admin/accounts/customers/companies' component={Companies} />
          <Route path='/admin/orders/incoming' component={IncomingOrders} />
          <Route path='/admin/orders/active' component={ActiveOrders} />
          <Route path='/admin/orders/add' component={AddOrders} />
          <Route path='/admin/orders/handle' component={HandleOrders} />
          <Route path='/admin/orders/completed' component={CompletedOrders} />
          <Route path='/admin/orders/complaints/add' component={AddComplaints} />
          <Route path='/admin/orders/complaints' component={Complaints} />
          <Route path='/admin/orders/internal/add' component={AddInternalOrders} />
          <Route path='/admin/orders/internal' component={InternalOrders} />
          <Route path='/admin/orders/:id' component={Order} />
          <Route path='/employee/active' component={EmployeeActive} />
          <Route path='/employee/history' component={EmployeeHistory} />
          <Route path='/employee/incoming' component={EmployeeIncoming} />
          <Route path='/employee/orders/:id' component={EmployeeOrderView} />
          <Route path='/profile' component={CustomerProfile} />
          <Route path='/complaints' component={CustomerComplaints} />
          <Route path='/history' component={CustomerHistory} />
          <Route path='/orders/add' component={CustomerOrders} />
          <Route path='/orders/:id' component={CustomerOrderDetails} />
          <Route path='/contact' component={CustomerContact} />
          <Route path='/logout' component={Login} />
          <Route component={NotFoundPage} />  
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
