import React, { Component } from 'react'
// import { connect } from "react-redux";
import { Link, withRouter } from 'react-router-dom'


class CompanyList extends Component {
  render() {
      const userId = 3

    return (
      <div>
        <h1> Företagskunder </h1>
        <ul>
          <li>
          <Link to={`/admin/accounts/customers/companies/${userId}`}>
             <p>Stena</p>
          </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(CompanyList);
