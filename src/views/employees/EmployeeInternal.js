import React, { Component } from "react"
import { EmployeeInternalList } from '../../components'

export default class EmployeeInternal extends Component {

  render() {
    return (
        <div className="fix-employee">
            <EmployeeInternalList/>
        </div>    
    )
  }

}