import React, { Component } from "react"
import { connect } from "react-redux";
import { fetchOrders } from "../../redux/actions/admin/Orders";
import Cookies from "universal-cookie";

import { Link, withRouter } from "react-router-dom";
import './style.css'


class CompletedOrdersList extends Component {
  constructor (props) {
    super(props);
    this.state = { 
      isAdmin: false
    }
  }


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

    if(user.user_type === 'admin') {
      this.setState({ isAdmin: true })
    }
    }
  render() {
      const { isAdmin } = this.state;
      const { orders } = this.props;
    
      return (
    orders ?
      <div className="BasicList__container">
        <h4>Avslutade ärenden</h4>
        <ul className="BasicList__list">
            {isAdmin === true ?
            orders.map(order => (
              <li key={order.service_id}>
                <Link to={`/admin/orders/${order.service_id}`}>
                  <div className="edit">
                    <p>Beställare : XXXX, orderId: </p>
                    <i className="fas fa-exclamation-triangle"></i> Skapa Reklamation
                  </div>
                </Link>
              </li>
              ))
            : ( 
              orders.map(order => (
                <li key={order.service_id}>
                  <Link to={`/orders/${order.service_id}`}>
                    <div className="edit">
                      <p>Beställare : XXXX, orderId: </p>
                      <i className="fas fa-exclamation-triangle"></i> Skapa Reklamation
                    </div>
                  </Link>
                </li>
                ))
              )
            }
        </ul>
      </div>
      : (
        <div className="BasicList__container">
          <h4> Avslutade ärenden </h4>
          <p>Inga avslutade ärenden att visa</p>
      </div>  
      )
    );
  }
}

const mapStateToProps = state => ({ 
  orders: state.admin.orders, 
});


export default withRouter(connect(mapStateToProps)(CompletedOrdersList));
