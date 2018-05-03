import React, { Component } from "react"
import { EmployeeBottomNav, EmployeeOngoingList } from '../../components'

export default class EmployeeOngoing extends Component {

  render() {
    return (
        <div>
            employee - Ongoing view
            <EmployeeOngoingList/>
            <EmployeeBottomNav/>
        </div>    
    )
  }

}