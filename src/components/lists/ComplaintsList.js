import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchOrders } from "../../redux/actions/admin/Orders";
import Cookies from "universal-cookie";

import { Link, withRouter } from "react-router-dom";
import './style.css'


class ComplaintsList extends Component {

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

    this.props.dispatch(fetchOrders(token));
  }

  render() {
      const { orders } = this.props;

      // if complaints

    return (
      
      orders ?
      <div className="BasicList__container">
        <h4> Reklamationer </h4>
        <ul className="BasicList__list">
          {/* {orders.map(order => (
          <li key={order.service_id}>
            <Link to={`/admin/orders/${order.service_id}`}>
              <div className="edit">
                <p>Beställare : XXXX, orderId: </p>
                <p>Åtgärdas av : anställd</p>
                <i className="fas fa-edit" />
              </div>
            </Link>
          </li>
          ))} */}
        </ul>
      </div>
      : (        
        <div className="BasicList__container">
          <h4> Reklamationer </h4>
          <p>Inga reklamationer att visa</p>
        </div>  
         )
      )
    } 
  }

  const mapStateToProps = state => ({ 
    orders: state.admin.orders, 
  });

export default withRouter(connect(mapStateToProps)(ComplaintsList));
