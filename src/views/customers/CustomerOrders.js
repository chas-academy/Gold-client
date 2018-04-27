import React, { Component } from "react"
import './style.css'

import { AddOrder, CustomerBottomNav } from '../../components'

export default class CustomerOrders extends Component {

  render() {
    return (
        <div className="customerOrder">
          <h3>Lägg till en ny beställning</h3>
          <AddOrder />
          <CustomerBottomNav />
        </div>
    )
  }

}