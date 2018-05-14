import React, { Component } from "react"
import { AdminTopNav, AdminBottomNav, ActiveOrdersList } from '../../../components'

export default class ActiveOrders extends Component {

  render() {
    return (
        <div> 
            <AdminTopNav />
                <ActiveOrdersList />
            <AdminBottomNav />
        </div>    
    )
}

}