import React, { Component } from "react"
import { AdminTopNav, AdminBottomNav, CompanyList, CreateUser } from '../../../components'

export default class Companies extends Component {

  render() {
    return (
        <div> 
            <AdminTopNav />
                <CompanyList />
                <CreateUser />
            <AdminBottomNav />
        </div>    
    )
}

}

