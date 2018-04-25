import React, { Component } from "react"
// import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import './style.css'


class CompletedOrdersList extends Component {
  render() {
      const orderId = 1;
      const orderId2 = 2;
    return (
      <div className="users">
        <h4> Avslutade ärenden </h4>
        <ul>
          <li>
            <Link to={`/admin/orders/${orderId}`}>
              <div className="edit">
                    <p>OrderId:{orderId} </p>
                    <p>Beställt: MM - DD - XX:XX </p>
                    <p>Avslutat: MM - DD - XX:XX </p>
              </div>
            </Link>
          </li>
          <li>
            <Link to={`/admin/orders/${orderId2}`}>
              <div className="edit">
                <p>OrderId:{orderId2} </p>
                <p>Beställt: MM - DD - XX:XX </p>
                <p>Avslutat: MM - DD - XX:XX </p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(CompletedOrdersList);
