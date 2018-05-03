import React, { Component } from "react"
// import { connect } from "react-redux";
import { AdminTopNav, AdminBottomNav, HandleOrder } from '../../../components'

export default class Order extends Component {

  render() {
    return (
        <div> 
            <AdminTopNav />
                <div className="Admin__div">
                <HandleOrder />
                </div>
            <AdminBottomNav />
        </div>    
    )
}

}