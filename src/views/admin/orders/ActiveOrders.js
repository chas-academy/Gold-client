import React, { Component } from "react"
// import { connect } from "react-redux";
import { AdminTopNav, AdminBottomNav, ActiveOrdersList } from '../../../components'

export default class ActiveOrders extends Component {

  render() {
    return (
        <div> 
            <AdminTopNav />
            <div className="Admin__div">
                <ActiveOrdersList />
            </div>    
            <AdminBottomNav />
        </div>    
    )
}

}