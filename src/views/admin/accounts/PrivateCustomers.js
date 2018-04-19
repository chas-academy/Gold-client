import React, { Component } from "react"
// import { connect } from "react-redux";
import { AdminTopNav, AdminBottomNav, PrivateCustomerList } from '../../../components'

export default class PrivateCustomers extends Component {

  render() {
    return (
        <div> 
            <AdminTopNav />
            <PrivateCustomerList />
            <AdminBottomNav />
        </div>    
    )
}

}

