import React, { Component } from "react"
// import { connect } from "react-redux";
import { AdminTopNav, AdminBottomNav, AddComplaint } from '../../../components'

export default class AddComplaints extends Component {

  render() {
    return (
        <div> 
            <AdminTopNav />
            <AddComplaint />
            <AdminBottomNav />
        </div>    
    )
}

}