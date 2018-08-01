import React, { Component } from "react"
import { AdminTopNav, AdminBottomNav, CreateUser } from '../../../components'
import './style.css'

export default class CreateUsers extends Component {

  render() {
    return (
        <div> 
            <AdminTopNav />
            <div className="forms-adjustment">
                <CreateUser />
            </div>    
            <AdminBottomNav />
        </div>    
    )
}

}


