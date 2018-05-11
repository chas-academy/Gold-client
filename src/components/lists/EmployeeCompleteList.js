import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchOrders } from "../../redux/actions/admin/Orders";

import Cookies from "universal-cookie";

import './style.css'

class EmployeeCompleteList extends Component {

  // constructor(props) {
  //   super(props);
  // }

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

    // if status = completed and user_id = user.id
    return (
      orders ?
      <div className="BasicList__container">
        <h4> Slutförda Jobb</h4>
        <p> Här kan du se dina slutförda jobb.</p>
        <hr />
        <ul className="BasicList__list">
        {/* {orders.map(order => (
          <li key={order.service_id}>
            <Link to={`/admin/orders/${order.service_id}`}>
              <div className="edit">
                <p>Kund: XXXXX</p>
                <p>datum: XXXX</p>
                <p className="IncomingJobAccept">Slutfört</p>
              </div>
            </Link>
          </li>
          ))} */}
        </ul>
      </div>
      : (
        <div className="BasicList__container">
        <h4> Slutförda jobb </h4>
        <p>Inga slutförda jobb att visa</p>
      </div>  
      )
    );
  }
}

const mapStateToProps = state => ({ 
  orders: state.admin.orders, 
});

export default withRouter(connect(mapStateToProps)(EmployeeCompleteList));