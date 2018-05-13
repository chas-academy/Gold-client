import React, { Component } from "react"
import { AdminTopNav, AdminBottomNav, PrivateCustomerList, CreateUser } from '../../../components'

export default class PrivateCustomers extends Component {

  render() {
    return (
        <div> 
            <AdminTopNav />
                <PrivateCustomerList />
                <CreateUser />
            <AdminBottomNav />
        </div>    
    )
}

}

