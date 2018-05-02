import React, { Component } from "react"
import { Link, withRouter } from "react-router-dom"

import './style.css'

class EmployeeHome extends Component {

  render() {
      const user = 'Adam';
    return (
        <div className="welcome">
            <Link to={`/profile`}>
                <i className="far fa-user-circle"></i>
            </Link>
            <h3>Välkommen {user}</h3>
            <div>
                <button className="CustomerHomeButtons">
                <Link to={`/employee/incoming`}>
                    <i className="fas fa-inbox"></i>
                </Link>    
                </button>
                <button className="CustomerHomeButtons">
                <Link to={`/confirm`}>
                    <i class="far fa-check-circle"></i>           
                </Link>    
                </button>
            </div>
            <div>
                <button className="CustomerHomeButtons">
                <Link to={`/contact`}>
                    <i class="far fa-envelope"></i>
                </Link>    
                </button>
                <button className="CustomerHomeButtons">
                <Link to={`employee/history`}>
                    <i className="fas fa-history"></i>
                </Link>    
                </button>
            </div>
        </div>    
    )
  }

}

export default withRouter(EmployeeHome)