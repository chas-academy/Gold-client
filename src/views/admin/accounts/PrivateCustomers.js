import React, { Component } from "react"
// import { connect } from "react-redux";
import { AdminTopNav, AdminBottomNav, PrivateCustomerList, CreateUser } from '../../../components'

export default class PrivateCustomers extends Component {

  render() {
    return (
        <div> 
            <AdminTopNav />
            <div className="Admin__div">
                <PrivateCustomerList />
                <CreateUser />
            </div>    
            <AdminBottomNav />
        </div>    
    )
}

}

