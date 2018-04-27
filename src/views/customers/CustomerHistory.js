import React, { Component } from "react"
import './style.css'

import { CustomerBottomNav, CompletedOrdersList } from '../../components'

export default class CustomerHistory extends Component {
    constructor (props) {
        super(props);
    
        this.state = { 
            isAdmin: false
        };
    } 

  render() {
    return (
        <div className="customerOrder">
          <h3>Beställningshistorik</h3>
          <CompletedOrdersList isAdmin={this.state.isAdmin} />
          <CustomerBottomNav />
        </div>
    )
  }

}