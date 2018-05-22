import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchOrders } from "../../redux/actions/admin/Orders";
import Cookies from "universal-cookie";
import { Tabs, TabLink, TabContent } from "react-tabs-redux";

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
      return <i class="fas fa-circle-notch fa-spin"></i>;
    }

    
    const AssignedOrders = [];
    const TakenOrders = [];
    const DoneOrders = [];
    // const AssignedOrders = orders.filter(order => order.service.status === "assigned");
    // const TakenOrders = orders.filter(order => order.service.status === "taken");
    // const DoneOrders = orders.filter(order => order.service.status === "done");
    
    return (
      <div className="BasicList__container">
        <h4> Beställningar </h4>
        <Tabs>
          <div className="history-tabs">
            <TabLink className="history-tablink" to="hanterade">
              Hanterade
            </TabLink>
            <TabLink className="history-tablink" to="pågående">
              Pågående
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
                    <Link to={`/admin/orders/${order.service_id}`}>
                      <div className="edit">
                        {order.service.company_name ? (
                          <p>{order.service.company_name}</p>
                        ) : (
                          <p>{order.service.con_pers}</p>
                        )}
                        <p>Anställd: {}</p>
                        <i className="fas fa-edit" />
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
          <TabContent for="pågående">
            {TakenOrders.length ? (
              <ul className="BasicList__list">
                {AssignedOrders.map(order => (
                  <li key={order.service_id}>
                    <Link to={`/admin/orders/${order.service_id}`}>
                      <div className="edit">
                        {order.service.company_name ? (
                          <p>{order.service.company_name}</p>
                        ) : (
                          <p>{order.service.con_pers}</p>
                        )}
                        <p>status: {order.service.status}</p>
                        <i className="fas fa-edit" />
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
          <TabContent for="avslutade">
            {DoneOrders.length ? (
              <ul className="BasicList__list">
                {AssignedOrders.map(order => (
                  <li key={order.service_id}>
                    <Link to={`/admin/orders/${order.service_id}`}>
                      <div className="edit">
                        {order.service.company_name ? (
                          <p>{order.service.company_name}</p>
                        ) : (
                          <p>{order.service.con_pers}</p>
                        )}
                        <p>status: {order.service.status}</p>
                        <i className="fas fa-edit" />
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
