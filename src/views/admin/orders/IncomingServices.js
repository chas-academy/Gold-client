import React, { Component } from "react"
import { AdminTopNav, AdminBottomNav, IncomingServicesList } from '../../../components'

export default class IncomingServices extends Component {

  render() {
    return (
        <div> 
            <AdminTopNav />
                    <IncomingServicesList />
            <AdminBottomNav />
        </div>    
    )
}

}