import React, { Component } from "react"
import { EmployeeBottomNav, EmployeeActiveList } from '../../components'

export default class EmployeeOngoing extends Component {

  render() {
    return (
        <div>
            <EmployeeActiveList/>
            <EmployeeBottomNav/>
        </div>    
    )
  }

}