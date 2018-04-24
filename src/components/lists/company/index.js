import React, { Component } from 'react'
// import { connect } from "react-redux";
import { Link, withRouter } from 'react-router-dom'


class CompanyList extends Component {
  render() {
      const userId = 3

    return (
      <div className="users">
        <h4> Företagskunder </h4>
        <ul>
          <li>
          <Link to={`/admin/accounts/customers/companies/${userId}`}>
            <div className="edit">
              <p>Stena</p>
              <i className="fas fa-edit"></i>
            </div> 
          </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(CompanyList);
