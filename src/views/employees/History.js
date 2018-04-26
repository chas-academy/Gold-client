import React, { Component } from "react"
import { EmployeeTopNav, EmployeeBottomNav } from '../../components'

export default class EmployeeHistory extends Component {

  render() {
    return (
        <div>  
            <EmployeeTopNav/>
                    employee - history view
            <EmployeeBottomNav/>
        </div>    
    )
  }

}