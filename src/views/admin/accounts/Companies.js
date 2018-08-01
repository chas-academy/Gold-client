import React, { Component } from "react"
import { AdminTopNav, AdminBottomNav, CompanyList } from '../../../components'

export default class Companies extends Component {

  render() {
    return (
        <div> 
            <AdminTopNav />
            <CompanyList />
            <AdminBottomNav />
        </div>    
    )
}

}

