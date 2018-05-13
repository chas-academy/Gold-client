import React, { Component } from "react"
import { AdminTopNav, AdminBottomNav, CreateUser } from '../../../components'
import './style.css'

export default class CreateUsers extends Component {

  render() {
    return (
        <div> 
            <AdminTopNav />
                    <CreateUser />
            <AdminBottomNav />
        </div>    
    )
}

}


