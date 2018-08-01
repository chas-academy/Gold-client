import React, { Component } from "react"
import { AdminTopNav, AdminBottomNav, CreateCustomer } from '../../../components'
import './style.css'

export default class CreateCustomers extends Component {

  render() {
    return (
        <div> 
            <AdminTopNav />
            <div className="forms-adjustment">
                <CreateCustomer />
            </div>    
            <AdminBottomNav />
        </div>    
    )
}

}


