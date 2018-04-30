import React, { Component } from "react"
import './style.css'
import img from '../../assets/img/Slice1.png'

import { AddOrder, CustomerBottomNav } from '../../components'

export default class CustomerOrders extends Component {

  render() {
    return (
        <div className="CustomerOrders__container">
          <div className="AllPagesInfo">
            <img src={img} height={50} />
            <h3> Ny beställning</h3>
          </div>
          <AddOrder />
          <CustomerBottomNav />
        </div>
    )
  }

}