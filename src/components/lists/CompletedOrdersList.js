import React, { Component } from "react";
import { connect } from "react-redux";
import { Tabs, TabLink, TabContent } from "react-tabs-redux";
import { fetchServicesDone } from "../../redux/actions/admin/Orders";
import Cookies from "universal-cookie";

import { Link, withRouter } from "react-router-dom";
import "./style.css";
import CompletedOrders from "../../views/admin/orders/CompletedOrders";

class CompletedOrdersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdmin: false
    };
  }

  componentWillMount() {
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

    this.props.dispatch(fetchServicesDone(token));

    if (user.user_type === "admin") {
      this.setState({ isAdmin: true });
    }
  }
  render() {
    const { isAdmin } = this.state;

    const { servicesDone, isFetching } = this.props;

    if(isFetching) {
      return <i class="fas fa-circle-notch fa-spin"></i>;
    }

    const completedOrders = servicesDone.filter(
      order => order.order_type === "order"
    );
    const completedComplaints = servicesDone.filter(
      order => order.order_type === "complaint"
    );
    const completedInternalOrders = servicesDone.filter(
      order => order.order_type === "int_order"
    );

    return (
      <div className="BasicList__container">
        <h4>Avslutade ärenden</h4>
        <Tabs>
          <div className="history-tabs">
            <TabLink className="history-tablink" to="beställningar">
              Beställningar
            </TabLink>
            <TabLink className="history-tablink" to="reklamationer">
              Reklamationer
            </TabLink>
            <TabLink className="history-tablink" to="Interna">
              Interna
            </TabLink>
          </div>
          <TabContent for="beställningar">
            {completedOrders.length ? (
              <ul className="BasicList__list">
                {isAdmin === true
                  ? completedOrders.map(order => (
                      <li key={order.service_id}>
                        <Link to={`/admin/orders/${order.service_id}`}>
                          <div className="edit">
                            <p>Beställare : XXXX, orderId: </p>
                            <i className="fas fa-exclamation-triangle" /> Skapa
                            Reklamation
                          </div>
                        </Link>
                      </li>
                    ))
                  : completedOrders.map(order => (
                      <li key={order.service_id}>
                        <Link to={`/orders/${order.service_id}`}>
                          <div className="edit">
                            <p>Beställare : XXXX, orderId: </p>
                            <i className="fas fa-exclamation-triangle" /> Skapa
                            Reklamation
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
          <TabContent for="reklamationer">
            {completedComplaints.length ? (
              <ul className="BasicList__list">
                {isAdmin === true
                  ? completedComplaints.map(order => (
                      <li key={order.service_id}>
                        <Link to={`/admin/orders/${order.service_id}`}>
                          <div className="edit">
                            <p>Beställare : XXXX, orderId: </p>
                            <i className="fas fa-exclamation-triangle" /> Skapa
                            Reklamation
                          </div>
                        </Link>
                      </li>
                    ))
                  : completedComplaints.map(order => (
                      <li key={order.service_id}>
                        <Link to={`/orders/${order.service_id}`}>
                          <div className="edit">
                            <p>Beställare : XXXX, orderId: </p>
                            <i className="fas fa-exclamation-triangle" /> Skapa
                            Reklamation
                          </div>
                        </Link>
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
          {completedInternalOrders.length ? (
            <ul className="BasicList__list">
              {isAdmin === true
                ? completedInternalOrders.map(order => (
                    <li key={order.service_id}>
                      <Link to={`/admin/orders/${order.service_id}`}>
                        <div className="edit">
                          <p>Beställare : XXXX, orderId: </p>
                          <i className="fas fa-exclamation-triangle" /> Skapa
                          Reklamation
                        </div>
                      </Link>
                    </li>
                  ))
                : completedInternalOrders.map(order => (
                    <li key={order.service_id}>
                      <Link to={`/orders/${order.service_id}`}>
                        <div className="edit">
                          <p>Beställare : XXXX, orderId: </p>
                          <i className="fas fa-exclamation-triangle" /> Skapa
                          Reklamation
                        </div>
                      </Link>
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
  servicesDone: state.adminOrders.servicesDone,
  isFetching: state.adminOrders.isFetching
});

export default withRouter(connect(mapStateToProps)(CompletedOrdersList));
