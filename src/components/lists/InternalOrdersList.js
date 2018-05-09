import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchOrders } from "../../redux/actions/admin/Orders";

import { Link, withRouter } from "react-router-dom";
import './style.css'


class InternalOrdersList extends Component {

  componentWillMount() { 
    this.props.dispatch(fetchOrders());
  }

  render() {

    const { orders } = this.props;

    return (
      orders ?
      <div className="BasicList__container">
        <h4> Interna ärenden </h4>
        <ul className="BasicList__list">
          {/* {orders.map(order => (
          <li key={order.service_id}>
            <Link to={`/admin/orders/${order.service_id}`}>
              <div className="edit">
                <p>Beställare : XXXX, orderId: </p>
                <i className="fas fa-edit" />
              </div>
            </Link>
          </li>
          ))} */}
        </ul>
      </div>
      : (
        <div className="BasicList__container">
            <h4> Interna ärenden </h4>
          <p>Inga interna ärenden att visa</p>
        </div>  
      )
        )
    } 
  }

const mapStateToProps = state => ({ 
  orders: state.admin.orders, 
});

export default withRouter(connect(mapStateToProps)(InternalOrdersList));
