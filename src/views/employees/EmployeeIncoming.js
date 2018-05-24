import React, { Component } from "react"
import { EmployeeBottomNav, EmployeeIncomingList } from '../../components'

export default class EmployeeIncoming extends Component {

  render() {
    return (
        <div className="fix-employee">
            <EmployeeIncomingList/>
            <EmployeeBottomNav/>
        </div>    
    )
  }

}