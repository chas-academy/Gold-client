import React, { Component } from "react"
import { EmployeeBottomNav, EmployeeIncomingList } from '../../components'

export default class EmployeeIncoming extends Component {

  render() {
    return (
        <div className="forms-adjust">
            <EmployeeIncomingList/>
            <EmployeeBottomNav/>
        </div>    
    )
  }

}