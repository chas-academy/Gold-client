import React, { Component } from "react"
import './style.css'

import { EmployeeBottomNav, UserProfile } from '../../components'

export default class EmployeeProfile extends Component {

  render() {
    return (
        <div className="forms-adjustment">
          <UserProfile />
          <EmployeeBottomNav />
        </div>
    )
  }

}