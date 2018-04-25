import React, { Component } from "react";
// import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { CreateUser } from "../../components";
import './style.css'

class EmployeeList extends Component {
  render() {
    const userId = 1;
    const userId2 = 2;
    return (
      <div className="users">
        <h4> Hantera Anställda </h4>
        <ul>
          <li>
            <CreateUser />
          </li>
          <li>
            <Link to={`/admin/accounts/employees/${userId}`}>
              <div className="edit">
                <p>Karin</p>
                <i className="fas fa-edit" />
              </div>
            </Link>
          </li>
          <li>
            <Link to={`/admin/accounts/employees/${userId2}`}>
              <div className="edit">
                <p>Hassan</p>
                <i className="fas fa-edit" />
              </div>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(EmployeeList);
