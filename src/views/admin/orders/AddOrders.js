import React, { Component } from "react"
// import { connect } from "react-redux";
import { AdminTopNav, AdminBottomNav, AddOrder } from '../../../components'

export default class AddOrders extends Component {

  render() {
    return (
        <div> 
            <AdminTopNav />
            <AddOrder />
            <AdminBottomNav />
        </div>    
    )
}

}