import React, { Component } from 'react'
import img from '../../assets/img/Slice1.png'
import './style.css'

import { CustomerBottomNav, AddComplaint } from '../../components'

export default class CustomerComplaints extends Component {

  render() {
    return (
        <div className='customerOrder'>
            <div className='AllPagesInfo'>
              <img src={img} height={50} />
              <h3>Skapa reklamation</h3>
            </div>  
          <AddComplaint />
          <CustomerBottomNav />
        </div>
    )
  }

}