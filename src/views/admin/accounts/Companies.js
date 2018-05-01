import React, { Component } from "react"
// import { connect } from "react-redux";
import { AdminTopNav, AdminBottomNav, CompanyList, CreateUser } from '../../../components'

export default class Companies extends Component {

  render() {
    return (
        <div> 
            <AdminTopNav />
            <div className="Admin__div">
                <CompanyList />
                <CreateUser />
            </div>    
            <AdminBottomNav />
        </div>    
    )
}

}

