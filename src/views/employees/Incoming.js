import React, { Component } from "react"
import { EmployeeBottomNav, IncomingJobsList } from '../../components'

export default class EmployeeIncoming extends Component {

  render() {
    return (
        <div>
            employee - Incoming view
            <IncomingJobsList/>
            <EmployeeBottomNav/>
        </div>    
    )
  }

}