import React, { Component } from "react"
import { AdminTopNav, AdminBottomNav, AssignedOrdersList } from '../../../components'

export default class AssignedOrders extends Component {

  render() {
    return (
        <div> 
            <AdminTopNav />
                <AssignedOrdersList />
            <AdminBottomNav />
        </div>    
    )
}

}