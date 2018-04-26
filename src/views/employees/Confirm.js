import React, { Component } from "react"
import { EmployeeTopNav, EmployeeBottomNav } from '../../components'

export default class EmployeeConfirm extends Component {

  render() {
    return (
        <div> 
            < EmployeeTopNav />
                employee - Confirm view
            < EmployeeBottomNav />
        </div>    
    )
  }

}