import React, { Component } from "react"
import { AdminTopNav, AdminBottomNav, IncomingServicesList } from '../../../components'

export default class IncomingServices extends Component {

  render() {
    return (
        <div> 
            <AdminTopNav />
            <div className="forms-adjustment">
                <IncomingServicesList />
            </div>
            <AdminBottomNav />
        </div>    
    )
}

}