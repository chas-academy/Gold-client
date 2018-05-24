import React, { Component } from "react"
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

