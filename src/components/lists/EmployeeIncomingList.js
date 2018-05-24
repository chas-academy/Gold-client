import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAssigned } from "../../redux/actions/employees";
import { Link, withRouter } from "react-router-dom";
import Cookies from "universal-cookie";
import { EmployeeBottomNav } from '../../components';
import Moment from "react-moment";

import "./style.css";

class EmployeeIncomingList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  componentDidMount() {
    const cookies = new Cookies();
    var token = cookies.get("token");
    const user = JSON.parse(
      window.atob(
        token
          .split(".")[1]
          .replace("-", "+")
          .replace("_", "/")
      )
    );

    this.props.dispatch(fetchAssigned(user.id, token));
  }

  render() {
    const { isFetching, Assigned } = this.props;

    if(isFetching) {
      return <i className="fas fa-circle-notch fa-spin"></i>;
    }
    const newOrders = Assigned.filter(order => order.order_type === "order");
    const newComplaints = Assigned.filter(order => order.order_type === "complaint");
    const newInternal = Assigned.filter(order => order.order_type === "int_order");

    

    return (
        <div className="BasicList__container">
          <h4> nya ärenden  </h4>
        <p>
          Här samlas dina ärenden som ska hanteras. Klicka på ärendet och bekräfta när det är åtgärdat.
        </p>
        <hr />
              {newOrders.length ? (
                <ul className="BasicList__list">
                  {newOrders.map(order => (
                    <li key={order.id}>
                      <Link to={`services/${order.id}`}>
                        <div className="edit">
                        <p>Jobb: <Moment format="DD/MM  HH:mm">{order.datetime}</Moment></p>
                          {order.company_name ? (
                            <p>{order.company_name} </p>
                          ) : (
                            <p>{order.con_pers} </p>
                          )}
                          <p> Detaljer </p>
                        </div>
                      </Link>
                      <hr />
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="BasicList__container">
                  <p>Inga nya jobb</p>
                </div>
              )}

        <h4> Reklamationer </h4>
        <hr />
              {newComplaints.length ? (
                <ul className="BasicList__list">
                  {newComplaints.map(order => (
                    <li key={order.id}>
                      <Link to={`services/${order.id}`}>
                        <div className="edit">
                        <p>Åtgärdas: <Moment format="DD/MM  HH:mm">{order.datetime}</Moment></p>
                          {order.company_name ? (
                            <p>{order.company_name} </p>
                          ) : (
                            <p>{order.con_pers} </p>
                          )}
                          <p> Detaljer </p>
                        </div>
                      </Link>
                      <hr />
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="BasicList__container">
                  <p>Inga nya reklamationer</p>
                </div>
              )}
              <EmployeeBottomNav newOrders={newOrders} newComplaints={newComplaints} newInternal={newInternal}/>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  Assigned: state.employee.Assigned,
  isFetching: state.employee.isFetching
});

export default withRouter(connect(mapStateToProps)(EmployeeIncomingList));
