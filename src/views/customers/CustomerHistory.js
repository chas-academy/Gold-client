import React, { Component } from 'react'
import img from '../../assets/img/Slice1.png'
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
        <div className='customerOrder'>
            <div className='AllPagesInfo'>
            </div>
          <CompletedOrdersList isAdmin={this.state.isAdmin} />
          <CustomerBottomNav />
        </div>
    )
  }

}