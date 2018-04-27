import React, { Component } from "react"
import { EmployeeTopNav, EmployeeBottomNav, IncomingJobsList } from '../../components'

export default class EmployeeIncoming extends Component {

  render() {
    return (
        <div>
            {/* <EmployeeTopNav/> */}
            employee - Incoming view
            <IncomingJobsList/>
            <EmployeeBottomNav/>
        </div>    
    )
  }

}