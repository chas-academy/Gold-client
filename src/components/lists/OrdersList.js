import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchOrders } from "../../redux/actions/admin/Orders";
import Cookies from "universal-cookie";
import { Tabs, TabLink, TabContent } from "react-tabs-redux";
import Moment from "react-moment";
import { CreateOrder } from '../../components';
import { Link, withRouter } from "react-router-dom";
import "./style.css";

class OrdersList extends Component {
  componentWillMount() {
    const cookies = new Cookies();
    var token = cookies.get("token");
    this.props.dispatch(fetchOrders(token));
  }

  render() {
    const { orders, isFetching } = this.props;
    
    if(isFetching) {
      return <i className="fas fa-circle-notch fa-spin"></i>;
    }

    const AssignedOrders = orders.filter(order => order.service.status === "assigned");
    const DoneOrders = orders.filter(order => order.service.status === "done");
    
    return (
      <div className="BasicList__container">
        <h4> Beställningar </h4>
        <CreateOrder />
        <Tabs>
          <div className="history-tabs">
            <TabLink className="history-tablink" to="hanterade">
              Hanterade
            </TabLink>
            <TabLink className="history-tablink" to="avslutade">
              Avslutade
            </TabLink>
          </div>
          <TabContent for="hanterade">
            {AssignedOrders.length ? (
              <ul className="BasicList__list">
                {AssignedOrders.map(order => (
                  <li key={order.id}>
                    <Link to={`/admin/services/${order.id}`}>
                      <div className="edit">
                        {order.service.company_name ? (
                          <div>
                          <h5 className="customer">{order.service.company_name} </h5>
                          <p>Kontaktperson: {order.service.con_pers} </p>
                          </div>
                        ) : (
                          <h5 className="customer">{order.service.con_pers} </h5>
                        )}
                        <Moment format="DD/MM HH:mm">{order.datetime}</Moment>
                      </div>
                      <div className="employees">
                        Tilldelat:
                      {order.service.employees.map(employee => (
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
          <TabContent for="avslutade">
            {DoneOrders.length ? (
              <ul className="BasicList__list">
                {AssignedOrders.map(order => (
                  <li key={order.service_id}>
                    <Link to={`/admin/services/${order.service_id}`}>
                      <div className="edit">
                      {order.service.company_name ? (
                          <div>
                          <h5 className="customer">{order.service.company_name} </h5>
                          <p>Kontaktperson: {order.service.con_pers} </p>
                          </div>
                        ) : (
                          <h5 className="customer">{order.service.con_pers} </h5>
                        )}
                        <Moment format="DD/MM HH:mm">{order.datetime}</Moment>
                      </div>
                      <div className="employees">
                        Tilldelat:
                      {order.service.employees.map(employee => (
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
        </Tabs>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  orders: state.adminOrders.orders,
  isFetching: state.adminOrders.isFetching
});

export default withRouter(connect(mapStateToProps)(OrdersList));
