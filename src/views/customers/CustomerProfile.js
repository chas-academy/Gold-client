import React, { Component } from "react"
import './style.css'

import { CustomerBottomNav, UserProfile } from '../../components'

export default class CustomerProfile extends Component {

  render() {

    const kund = 'Stena';
    return (
        <div className="customerOrder">
            <div className="AllPagesInfo">
              <h3>{kund}</h3>
            </div>  
          <UserProfile />
          <CustomerBottomNav />
        </div>
    )
  }

}