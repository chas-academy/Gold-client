import React, { Component } from "react"
import { AdminTopNav, AdminBottomNav, PrivateCustomerList, AddUser } from '../../../components'

export default class PrivateCustomers extends Component {

  render() {
    return (
        <div> 
            <AdminTopNav />
                <PrivateCustomerList />
                <AddUser />
            <AdminBottomNav />
        </div>    
    )
}

}

