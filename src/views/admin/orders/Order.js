import React, { Component } from "react"
// import { connect } from "react-redux";
import { AdminTopNav, AdminBottomNav, OrderDetails } from '../../../components'

export default class Order extends Component {

  render() {
    return (
        <div> 
            <AdminTopNav />
            <OrderDetails />
            <AdminBottomNav />
        </div>    
    )
}

}