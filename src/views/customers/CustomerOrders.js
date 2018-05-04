import React, { Component } from "react"
import './style.css'

import { AddOrder, CustomerBottomNav } from '../../components'

export default class CustomerOrders extends Component {

  render() {
    return (
        <div className="CustomerOrders__container">
          <AddOrder isAdmin={false}/>
          <CustomerBottomNav />
        </div>
    )
  }

}