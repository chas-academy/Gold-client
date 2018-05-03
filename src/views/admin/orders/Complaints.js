import React, { Component } from "react"
// import { connect } from "react-redux";
import { AdminTopNav, AdminBottomNav, ComplaintsList, CreateComplaint } from '../../../components'

export default class Complaints extends Component {

  render() {
    return (
        <div> 
            <AdminTopNav />
            <div className="Admin__div">
                <ComplaintsList />
                <CreateComplaint />
            </div>    
            <AdminBottomNav />
        </div>    
    )
}

}