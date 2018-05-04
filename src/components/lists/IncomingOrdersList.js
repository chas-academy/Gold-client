import React, { Component } from "react";
// import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import './style.css'


class IncomingOrdersList extends Component {
  render() {
      const orderId = 1;
      const orderId2 = 2;
    return (
      <div className="BasicList__container">
        <h4> Nya ärenden </h4>
        <ul className="BasicList__list">
          <li>
            <Link to={`/admin/orders/${orderId}`}>
              <div className="edit">
                <p>Beställare : XXXX, orderId:{orderId} </p>
                <i className="fas fa-edit" />
              </div>
            </Link>
          </li>
          <li>
            <Link to={`/admin/orders/${orderId2}`}>
              <div className="edit">
                <p>Beställare: XXXX, orderId:{orderId2}</p>
                <i className="fas fa-edit" />
              </div>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(IncomingOrdersList);
