import React, { Component } from "react"
import { AdminTopNav, AdminBottomNav, UpdateUser } from '../../../components'
import './style.css'

export default class HandleAccounts extends Component {

  render() {
    return (
        <div> 
            <AdminTopNav />
                    <UpdateUser />
            <AdminBottomNav />
        </div>    
    )
}

}


