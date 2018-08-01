import React, { Component } from 'react'
import './style.css'

import { CustomerBottomNav, AddComplaint } from '../../components'

export default class CustomerComplaints extends Component {

  render() {
    return (
        <div>
          <AddComplaint isAdmin={false} id={this.props.match.params.id}/>
          <CustomerBottomNav />
        </div>
    )
  }

}