import React, { Component } from "react"
// import { connect } from "react-redux";
import { AdminTopNav, AdminBottomNav, CompletedOrdersList } from '../../../components'

export default class CompletedOrders extends Component {

  render() {
    return (
        <div> 
            <AdminTopNav />
                <CompletedOrdersList />
            <AdminBottomNav />
        </div>    
    )
}

}