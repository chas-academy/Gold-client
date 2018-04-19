import React, { Component } from "react"
// import { connect } from "react-redux";
// import { Link, withRouter } from "react-router-dom"

class EmployeeList extends Component {
  
  render() {
    return (
        <div> 
            <h1> Hantera Anställda </h1>
                <ul>
                    <li>
                        {/* <Link to={'/admin/accounts'}>
                          <p>Karin</p>
                        </Link> */}
                    </li>
                </ul>
        </div>    
        )
    }

}

export default withRouter(EmployeeList);

