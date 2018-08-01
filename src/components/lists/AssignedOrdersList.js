import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchServicesAssigned } from "../../redux/actions/admin/Orders";
import { Tabs, TabLink, TabContent } from "react-tabs-redux";
import Cookies from "universal-cookie";
import Moment from "react-moment";

import { Link, withRouter } from "react-router-dom";
import "./style.css";

class AssignedOrdersList extends Component {
  componentWillMount() {
    const cookies = new Cookies();
    var token = cookies.get("token");
    this.props.dispatch(fetchServicesAssigned(token));
  }

  render() {
    const { servicesAssigned, isFetching } = this.props;

    if(isFetching) {
      return (
        <div className="spinner">
          <i className="fas fa-circle-notch fa-spin"></i>
        </div>
        )  
    }
    
    const assignedOrders = servicesAssigned.filter(
      order => order.order_type === "order"
    );
    const assignedComplaints = servicesAssigned.filter(
      order => order.order_type === "complaint"
    );
    const assignedInternalOrders = servicesAssigned.filter(
      order => order.order_type === "int_order"
    );

    return (
      <div className="BasicList__container">
        <h4> Hanterade ärenden </h4>
        <Tabs>
          <div className="history-tabs">
            <TabLink className="history-tablink" to="beställningar">
              <i className="fas fa-list slide"></i>
              <p>Beställningar</p>
            </TabLink>
            <TabLink className="history-tablink" to="reklamationer">
              <i className="fas fa-exclamation-circle slide"></i>
              <p>Reklamationer</p>
            </TabLink>
            <TabLink className="history-tablink" to="Interna">
              <i className="fas fa-envelope-open slide"></i>
              <p>Interna</p>
            </TabLink>
          </div>
          <TabContent for="beställningar">
            {assignedOrders.length ? (
              <ul className="BasicList__list">
                {assignedOrders.map(order => (
                  <li key={order.id}>
                    <Link to={`/admin/services/${order.id}`}>
                      <div className="edit">
                        {order.company_name ? (
                          <div>
                          <h5 className="customer">{order.company_name} </h5>
                          <p>Kontaktperson: {order.con_pers} </p>
                          </div>
                        ) : (
                          <h5 className="customer">{order.con_pers} </h5>
                        )}
                        <Moment format="DD/MM HH:mm">{order.datetime}</Moment>
                      </div>
                      <div className="employees">
                        Tilldelat:
                      {order.employees.map(employee => (
                        <p className="employee"> {employee.name} </p>
                      ))}
                      </div>  
                    </Link>
                    <hr />
                  </li>
                ))}
              </ul>
            ) : (
              <div className="BasicList__container inner">
                <p>Inga beställningar att visa</p>
              </div>
            )}
          </TabContent>
          <TabContent for="reklamationer">
            {assignedComplaints.length ? (
              <ul className="BasicList__list">
                {assignedComplaints.map(order => (
                  <li key={order.id}>
                    <Link to={`/admin/services/${order.id}`}>
                      <div className="edit">
                        {order.company_name ? (
                          <div>
                          <h5 className="customer">{order.company_name} </h5>
                          <p>Kontaktperson: {order.con_pers} </p>
                          </div>
                        ) : (
                          <h5 className="customer">{order.con_pers} </h5>
                        )}
                        <Moment format="DD/MM HH:mm">{order.datetime}</Moment>
                      </div>
                      <div className="employees">
                        Tilldelat:
                      {order.employees.map(employee => (
                        <p className="employee"> {employee.name} </p>
                      ))}
                      </div>  
                    </Link>
                    <hr />
                  </li>
                ))}
              </ul>
            ) : (
              <div className="BasicList__container inner">
                <p>Inga reklamationer att visa</p>
              </div>
            )}
          </TabContent>
          <TabContent for="Interna">
          {assignedInternalOrders.length ? (
            <ul className="BasicList__list">
              {assignedInternalOrders.map(order => (
                  <li key={order.id}>
                    <Link to={`/admin/services/${order.id}`}>
                      <div className="edit">
                          <div>
                          <h5 className="customer"> Internt </h5>
                          </div>
                        <Moment format="DD/MM HH:mm">{order.datetime}</Moment>
                      </div>
                      <div className="employees">
                        Tilldelat:
                      {order.employees.map(employee => (
                        <p className="employee"> {employee.name} </p>
                      ))}
                      </div>  
                    </Link>
                    <hr />
                  </li>
              ))}
            </ul>
        ) : (
              <div className="BasicList__container inner">
                <p>Inga interna ärenden att visa</p>
              </div>
            )}
          </TabContent>
        </Tabs>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  servicesAssigned: state.adminOrders.servicesAssigned,
  isFetching: state.adminOrders.isFetching
});

export default withRouter(connect(mapStateToProps)(AssignedOrdersList));
