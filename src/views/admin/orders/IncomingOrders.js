import React, { Component } from "react"
// import { connect } from "react-redux"
import { AdminTopNav, AdminBottomNav, IncomingOrdersList } from '../../../components'

export default class IncomingOrders extends Component {

  render() {
    return (
        <div> 
            <AdminTopNav />
            <IncomingOrdersList />
            <AdminBottomNav />
        </div>    
    )
}

}