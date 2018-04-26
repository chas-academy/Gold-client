import React, { Component } from "react";
// import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { CreateUser } from "../../components";
import './style.css'

class IncomingJobsList extends Component {
  render() {
    const jobId = 1;
    const jobId2 = 2;
    return (
      <div className="users">
        <h4> Inkommande ärenden </h4>
        <ul>
          <li>
            <Link to={`/employee/${jobId}`}>
              <div className="edit">
                <p>Clean that up</p>
                <i className="fas fa-edit" />
              </div>
            </Link>
          </li>
          <li>
            <Link to={`/admin/accounts/employees/${jobId2}`}>
              <div className="edit">
                <p>Clean that office job</p>
                <i className="fas fa-edit" />
              </div>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(IncomingJobsList);