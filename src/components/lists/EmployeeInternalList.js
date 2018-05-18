import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAssigned } from "../../redux/actions/employees";
import { Link, withRouter } from "react-router-dom";
import { Tabs, TabLink, TabContent } from "react-tabs-redux";
import { EmployeeBottomNav } from '../../components';
import Cookies from "universal-cookie";
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
    
    const newInternal = Assigned.filter(order => order.order_type === "int_order");
    const newOrders = Assigned.filter(order => order.order_type === "order");
    const newComplaints = Assigned.filter(order => order.order_type === "complaint");
 
    return (
        <div className="BasicList__container">
          <h4>  Interna ärenden  </h4>
        <p>
          Här samlas interna ärenden som ska hanteras. Klicka på ärendet och bekräfta när det är åtgärdat.
        </p>
        <hr />

              {newInternal !== null ? (
                <ul className="BasicList__list">
                    {newInternal.length ? (
                      newInternal.map(order => (
                      <li key={order.id}>
                        <Link to={`/admin/services/${order.id}`}>
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
                      ))
                    ) : (
                      <li key={newInternal.id}>
                      <Link to={`/admin/services/${newInternal.id}`}>
                      <div className="edit">
                          {newInternal.company_name ? (
                            <p>{newInternal.company_name} </p>
                            ) : (
                            <p>{newInternal.con_pers} </p>
                            )}
                          <p> Hantera </p>
                        </div>
                      </Link>
                      </li> 
                      )}
                    </ul>  
                  ) : (
                    <div className="BasicList__container">
                      <p>Inga interna ärenden att hantera </p>
                    </div>
                  )
            }
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
