import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'

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
    AddComplaints,
    AddInternalOrders,
    ActiveOrders,
    HandleOrders,
    CompletedOrders,
    Complaints,
    InternalOrders,
    Order,
    Login,
    EmployeeConfirm,
    EmployeeHistory,
    EmployeeIncoming,
    EmployeeJobView,
    NotFoundPage,
    CustomerProfile,
    CustomerHistory,
    CustomerComplaints,
    CustomerOrders,
    Contact,
    EmployeeOngoing
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
          <Route path='/employee/ongoing' component={EmployeeOngoing} />
          <Route path='/employee/history' component={EmployeeHistory} />
          <Route path='/employee/incoming' component={EmployeeIncoming} />
          <Route path='/employee/jobs/:id' component={EmployeeJobView} />
          <Route path='/profile' component={CustomerProfile} />
          <Route path='/complaints' component={CustomerComplaints} />
          <Route path='/history' component={CustomerHistory} />
          <Route path='/order/add' component={CustomerOrders} />
          <Route path='/contact' component={Contact} />
          <Route path='/logout' component={Login} />
          <Route component={NotFoundPage} />  
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
