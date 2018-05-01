import React, { Component } from "react"
// import { connect } from "react-redux";
import { AdminTopNav, AdminBottomNav, UserProfile } from '../../../components'

export default class Profile extends Component {

  render() {
    return (
        <div> 
            <AdminTopNav />
            <div className="Admin__div">
                <UserProfile />
            </div>    
            <AdminBottomNav />
        </div>    
    )
}

}

