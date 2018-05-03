import React, { Component } from "react"
import './style.css'

import { CustomerBottomNav, UserProfile } from '../../components'

export default class CustomerProfile extends Component {

  render() {
    return (
        <div className="customerOrder">
          <UserProfile />
          <CustomerBottomNav />
        </div>
    )
  }

}