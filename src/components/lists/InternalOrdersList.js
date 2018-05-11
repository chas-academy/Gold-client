import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchInternalOrders } from "../../redux/actions/admin/Orders";
import Cookies from "universal-cookie";

import { Link, withRouter } from "react-router-dom";
import './style.css'
import { FETCH_INTERNAL_ORDER_SUCCESS } from "../../redux/actions/admin/Action-types";


class InternalOrdersList extends Component {

  
    componentWillMount() { 
      const cookies = new Cookies();
      var token = cookies.get("token");
    this.props.dispatch(fetchInternalOrders(token));
  }

  render() {

    const { internalOrders } = this.props;

    return (
      FETCH_INTERNAL_ORDER_SUCCESS ?
      <div className="BasicList__container">
        <h4> Interna ärenden </h4>
        <ul className="BasicList__list">
          {internalOrders.map(order => (
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
  internalOrders: state.adminOrders.internalOrders, 
});

export default withRouter(connect(mapStateToProps)(InternalOrdersList));
