import React, { Component } from "react"
// import { connect } from "react-redux";
import { AdminTopNav, AdminBottomNav, CompanyList } from '../../../components'

export default class Complaints extends Component {

  render() {
    return (
        <div> 
            <AdminTopNav />
            <AdminBottomNav />
        </div>    
    )
}

}