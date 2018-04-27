import React, { Component } from "react"
import './style.css'

import { CustomerBottomNav, AddComplaint } from '../../components'

export default class CustomerComplaints extends Component {

  render() {
    return (
        <div className="customerOrder">
          <h3>Skapa reklamation</h3>
          <AddComplaint />
          <CustomerBottomNav />
        </div>
    )
  }

}