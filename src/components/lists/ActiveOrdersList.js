import React, { Component } from "react";
// import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import './style.css'


class ActiveOrdersList extends Component {
  render() {
      const orderId = 1;
      const orderId2 = 2;
    return (
      <div className="users">
        <h4> Pågående ärenden </h4>
        <ul>
          <li>
            <Link to={`/admin/orders/${orderId}`}>
              <div className="edit">
                    <p>OrderId:{orderId} </p>
                    <p>Tilldelad: Anställd </p>
                <i className="fas fa-edit" />
              </div>
            </Link>
          </li>
          <li>
            <Link to={`/admin/orders/${orderId2}`}>
              <div className="edit">
                <p>OrderId:{orderId2} </p>
                <p>Tilldelad: Anställd </p>
                <i className="fas fa-edit" />
              </div>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(ActiveOrdersList);
