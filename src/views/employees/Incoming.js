import React, { Component } from "react"
import { EmployeeTopNav, EmployeeBottomNav } from '../../components'

export default class EmployeeIncoming extends Component {

  render() {
    return (
        <div>
            <EmployeeTopNav/>
            employee - Incoming view
            <EmployeeBottomNav/>
        </div>    
    )
  }

}