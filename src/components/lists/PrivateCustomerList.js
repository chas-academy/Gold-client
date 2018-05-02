import React, { Component } from "react";
// import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom"
import { CreateUser } from '../../components'
import './style.css'


class PrivateCustomerList extends Component {
  
    render() {
      const userId = 2
    return (
      <div className="BasicList__container">
        <h4> Privatkunder </h4>
        <ul className="BasicList__list">
          <li>
          <Link to={`/admin/accounts/customers/private/${userId}`}>
          <div className="edit">
             <p>Ahmed</p>
             <i className="fas fa-edit"></i>
          </div>   
          </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(PrivateCustomerList);