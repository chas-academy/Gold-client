import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchComplaints } from "../../redux/actions/admin/Orders";
import Cookies from "universal-cookie";

import { Link, withRouter } from "react-router-dom";
import './style.css'


class ComplaintsList extends Component {

  componentWillMount() { 
    const cookies = new Cookies();
    var token = cookies.get("token");
    this.props.dispatch(fetchComplaints(token));
  }

  render() {
      const { complaints } = this.props;

    return (
      
      complaints ?
      <div className="BasicList__container">
        <h4> Reklamationer </h4>
        <ul className="BasicList__list">
          {complaints.map(order => (
          <li key={order.service_id}>
          {console.log(order)}
            <Link to={`/admin/orders/${order.service_id}`}>
              <div className="edit">
                <p>{order.service.company_name}</p>
                <p>status: {order.service.status}</p>
                <i className="fas fa-edit" />
              </div>
            </Link>
          </li>
          ))}
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
    complaints: state.adminOrders.complaints, 
  });

export default withRouter(connect(mapStateToProps)(ComplaintsList));
