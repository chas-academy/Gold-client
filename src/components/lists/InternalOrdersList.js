import React, { Component } from "react";
// import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { CreateInternalOrder } from "../../components";
import './style.css'


class InternalOrdersList extends Component {
  render() {
      const orderId = 1;
      const orderId2 = 2;
    return (
      <div className="BasicList__container">
        <h4> Interna ärenden </h4>
        <ul>
          <li>
            <CreateInternalOrder />
          </li>
          <li>
            <Link to={`/admin/orders/${orderId}`}>
              <div className="edit">
                <p>Ärende: XXXX, orderId:{orderId} </p>
                <i className="fas fa-edit" />
              </div>
            </Link>
          </li>
          <li>
            <Link to={`/admin/orders/${orderId2}`}>
              <div className="edit">
                <p>Ärende: XXXX, orderId:{orderId2}</p>
                <i className="fas fa-edit" />
              </div>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(InternalOrdersList);
