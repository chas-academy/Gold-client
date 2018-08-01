import React, { Component } from "react"
import { AdminTopNav, AdminBottomNav, OrdersList } from '../../../components'

export default class Orders extends Component {

  render() {
    return (
        <div> 
            <AdminTopNav />
            <OrdersList />
            <AdminBottomNav />
        </div>    
    )
}

}