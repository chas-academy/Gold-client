import React, { Component } from 'react'
import './style.css'

import { CustomerBottomNav, CustomerHistoryList } from '../../components'

export default class CustomerHistory extends Component {

  render() {
    return (
        <div className='customerOrder'>
            <div className='AllPagesInfo'>
            </div>
          <CustomerHistoryList />
          <CustomerBottomNav />
        </div>
    )
  }

}