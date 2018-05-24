import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAssigned } from "../../redux/actions/employees";
import { Link, withRouter } from "react-router-dom";
import Cookies from "universal-cookie";
import { EmployeeBottomNav } from '../../components';
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
          Här samlas alla dina inkomna jobb. Klicka på ärendet för att få mer
          detaljer och bekräfta att du påbörjat jobbet när du har anlänt till
          kunden med knappen "Påbörja jobb".
        </p>
        <hr />
              {newOrders.length ? (
                <ul className="BasicList__list">
                  {newOrders.map(order => (
                    <li key={order.id}>
                      <Link to={`services/${order.id}`}>
                        <div className="edit">
                          {order.company_name ? (
                            <p>{order.company_name} </p>
                          ) : (
                            <p>{order.con_pers} </p>
                          )}
                          <p> Hantera </p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="BasicList__container">
                  <p>Inga nya jobb</p>
                </div>
              )}

        <h4> Reklamationer </h4>
              {newComplaints.length ? (
                <ul className="BasicList__list">
                  {newComplaints.map(order => (
                    <li key={order.id}>
                      <Link to={`services/${order.id}`}>
                        <div className="edit">
                          {order.company_name ? (
                            <p>{order.company_name} </p>
                          ) : (
                            <p>{order.con_pers} </p>
                          )}
                          <p> Hantera </p>
                        </div>
                      </Link>
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
