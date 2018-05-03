import React, { Component } from "react"
import { EmployeeBottomNav, EmployeeIncomingList } from '../../components'

export default class EmployeeIncoming extends Component {

  render() {
    return (
        <div>
            <EmployeeIncomingList/>
            <EmployeeBottomNav/>
        </div>    
    )
  }

}