import React, { Component } from "react"
import { AdminTopNav, AdminBottomNav, CreateCustomer } from '../../../components'
import './style.css'

export default class CreateCustomers extends Component {

  render() {
    return (
        <div> 
            <AdminTopNav />
                    <CreateCustomer />
            <AdminBottomNav />
        </div>    
    )
}

}


