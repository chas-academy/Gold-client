import React, { Component } from 'react'
import './style.css'

import { CustomerBottomNav, CompletedOrdersList } from '../../components'

export default class CustomerHistory extends Component {
    constructor (props) {
        super(props);
    
    } 

  render() {
    return (
        <div className='customerOrder'>
            <div className='AllPagesInfo'>
            </div>
          <CompletedOrdersList isAdmin={false} />
          <CustomerBottomNav />
        </div>
    )
  }

}