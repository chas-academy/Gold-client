import React, { Component } from "react"
// import { connect } from "react-redux";
import { AdminTopNav, AdminBottomNav, AddInternalOrder } from '../../../components'

export default class AddInternalOrders extends Component {

  render() {
    return (
        <div> 
            <AdminTopNav />
            <AddInternalOrder />
            <AdminBottomNav />
        </div>    
    )
}

}