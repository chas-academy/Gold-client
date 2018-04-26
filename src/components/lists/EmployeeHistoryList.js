import React, { Component } from "react";
// import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

import './style.css'

class EmployeeHistoryList extends Component {
  render() {

    return (
      <div className="users">
        <h4> History </h4>
        <ul>
          <li>         
              <div className="edit">
                <p>History lol?</p>
                <i className="fas fa-edit" />
              </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(EmployeeHistoryList);