import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchInternalOrders } from "../../redux/actions/admin/Orders";
import Cookies from "universal-cookie";

import { Link, withRouter } from "react-router-dom";
import './style.css'


class InternalOrdersList extends Component {

  
    componentWillMount() { 
      const cookies = new Cookies();
      var token = cookies.get("token");
      const user = JSON.parse(
        window.atob(
          token
            .split(".")[1]
            .replace("-", "+")
            .replace("_", "/")
        ))
  
    this.props.dispatch(fetchInternalOrders(token));
  }

  render() {

    const { orders } = this.props;

    return (
      orders ?
      <div className="BasicList__container">
        <h4> Interna ärenden </h4>
        <ul className="BasicList__list">
          {orders.map(order => (
            <li key={order.service_id}>
            {console.log(order)}
            <Link to={`/admin/orders/${order.service_id}`}>
              <div className="edit">
                <p>Ärende skapat: {order.service.createdAt}</p>
                <i className="fas fa-edit" />
              </div>
            </Link>
          </li>
          ))}
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
  orders: state.admin.internalOrders, 
});

export default withRouter(connect(mapStateToProps)(InternalOrdersList));
