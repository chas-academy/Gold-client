import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAssigned } from "../../redux/actions/employees";
import { Link, withRouter } from "react-router-dom";
import { EmployeeBottomNav } from '../../components';
import Cookies from "universal-cookie";
import Moment from "react-moment";

import "./style.css";

class EmployeeInternalList extends Component {
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
    
    const newInternal = Assigned.filter(order => order.order_type === "int_order");
 
    return (
        <div className="BasicList__container">
          <h4> Interna ärenden </h4>
          <p> Här samlas interna ärenden som ska hanteras. Klicka på ärendet och bekräfta när det är åtgärdat. </p>
          <hr />
                <ul className="BasicList__list">
                    {newInternal.length ? (
                      newInternal.map(order => (
                      <li key={order.id}>
                        <Link to={`services/${order.id}`}>
                          <div className="edit">
                            {order.company_name ? (
                              <p>{order.company_name} </p>
                              ) : (
                              <p>{order.con_pers} </p>
                              )}
                            {!order.company_name && !order.con_pers ? (
                              <p> Åtgärdas senast: <Moment format="DD/MM  HH:mm">{order.datetime}</Moment> </p>
                              ) : ('')}
                            <p> Detaljer </p>
                          </div>
                        </Link>
                      </li>
                      ))
                    ) : (
                      <div className="BasicList__container">
                        <p>Inga interna ärenden att hantera </p>
                      </div>
                    )}
                    </ul> 

            <EmployeeBottomNav />
          </div>
    )
  }
}

const mapStateToProps = state => ({
  Assigned: state.employee.Assigned,
  isFetching: state.employee.isFetching
});

export default withRouter(connect(mapStateToProps)(EmployeeInternalList));
