import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchOrders } from "../../redux/actions/admin/Orders";
import Cookies from "universal-cookie";
import { Tabs, TabLink, TabContent } from "react-tabs-redux";
import Moment from "react-moment";

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
                  <li key={order.service_id}>
                  {console.log(order.service)}
                    <Link to={`/admin/services/${order.service_id}`}>
                      <div className="edit">
                      <p><Moment format="MM/DD HH:mm">{order.service.datetime}</Moment></p>
                        {order.service.company_name ? (
                          <div>
                            <p>{order.service.company_name}</p>
                            <p>{order.service.con_pers}</p>
                          </div>
                        ) : (
                          <p>{order.service.con_pers}</p>
                        )}
                        <p>Anställd: </p>
                        {order.service.employees.map(employee => {
                          <p>{employee.name}</p>
                        })}
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
                          <p>{order.service.company_name}</p>
                        ) : (
                          <p>{order.service.con_pers}</p>
                        )}
                        <p>status: {order.service.status}</p>
                      </div>
                    </Link>
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
