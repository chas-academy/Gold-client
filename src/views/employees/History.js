import React, { Component } from "react"
import { EmployeeTopNav, EmployeeBottomNav, EmployeeHistoryList } from '../../components'

export default class EmployeeHistory extends Component {

  render() {
    return (
        <div>  
            {/* <EmployeeTopNav/> */}
                    employee - history view
                    <EmployeeHistoryList/>
            <EmployeeBottomNav/>
        </div>    
    )
  }

}