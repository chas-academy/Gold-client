import React, { Component } from "react"
import './style.css'

import { CustomerBottomNav, CompletedOrdersList } from '../../components'

export default class CustomerHistory extends Component {

  render() {
    return (
        <div className="customerOrder">
          <h3>Beställningshistorik</h3>
          <CompletedOrdersList />
          <CustomerBottomNav />
        </div>
    )
  }

}