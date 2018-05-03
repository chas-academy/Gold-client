import React, { Component } from "react"
// import { connect } from "react-redux";
import { AdminTopNav, AdminBottomNav, CompanyList, IncomingOrdersList, CreateOrder } from '../../../components'

export default class IncomingOrders extends Component {

  render() {
    return (
        <div> 
            <AdminTopNav />
                <div className="Admin__div">
                    <IncomingOrdersList />
                    <CreateOrder />
                </div>    

            <AdminBottomNav />
        </div>    
    )
}

}