import React, { Component } from "react"
// import { connect } from "react-redux";
import { AdminTopNav, AdminBottomNav, UpdateUser } from '../../../components'
import './style.css'

export default class HandleAccounts extends Component {

  render() {
    return (
        <div> 
            <AdminTopNav />
                <div className="Admin__div">
                    <UpdateUser />
                </div>
            <AdminBottomNav />
        </div>    
    )
}

}


