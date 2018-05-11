import React, { Component } from "react"
// import { connect } from "react-redux";
import { AdminTopNav, AdminBottomNav, InternalOrdersList, CreateInternalOrder } from '../../../components'

export default class InternalOrders extends Component {

  render() {
    return (
        <div> 
            <AdminTopNav />
                <InternalOrdersList />
                <CreateInternalOrder />
            <AdminBottomNav />
        </div>    
    )
}

}