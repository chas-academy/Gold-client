import React, { Component } from "react";
// import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom"

class PrivateCustomerList extends Component {
  
    render() {
      const userId = 2
    return (
      <div>
        <h1> Privatkunder </h1>
        <ul>
          <li>
          <Link to={`/admin/accounts/customers/private/${userId}`}>
             <p>Ahmed</p>
          </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(PrivateCustomerList);