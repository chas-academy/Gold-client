import React, { Component } from "react"
import { EmployeeTopNav, EmployeeBottomNav, EmployeeJobDetails  } from '../../components'

export default class EmployeeJobView extends Component {

  constructor(props) {
    super(props);
  }

  render() {


    return (
        <div> 
          <div>
            <h1></h1>
          </div>
              <EmployeeJobDetails/>
            < EmployeeBottomNav />
        </div>    
    )
  }

}