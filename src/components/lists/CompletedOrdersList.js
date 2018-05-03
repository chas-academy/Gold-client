import React, { Component } from "react"
// import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import './style.css'


class CompletedOrdersList extends Component {
  constructor (props) {
    super(props);

    this.state = { 
      isAdmin: false
    };
  }

  render() {
      const orderId = 1;
      const orderId2 = 2;
      const { isAdmin } = this.state;
      
    return (
      <div className="BasicList__container">
        <h4>Avslutade ärenden</h4>
        <ul className="BasicList__list">
          <li>
            {isAdmin === true ?
            <Link to={`/admin/orders/${orderId}`}>
              <div className="edit">
                    <p>OrderId:{orderId} </p>
                    <i className="fas fa-exclamation-triangle"></i>
              </div>
              </Link>
            : ( <Link to={`/order/${orderId}`}> 
              <div className="edit">
                    <p>OrderId:{orderId} </p>
                    <i className="fas fa-exclamation-triangle"></i>
              </div>
            </Link>)}
          </li>
          <li>
            <Link to={`/admin/orders/${orderId2}`}>
              <div className="edit">
                <p>OrderId:{orderId2} </p>
                <i className="fas fa-exclamation-triangle"></i>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(CompletedOrdersList);
