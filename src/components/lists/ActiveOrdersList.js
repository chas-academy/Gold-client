import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchServicesTaken } from "../../redux/actions/admin/Orders";
import { Tabs, TabLink, TabContent } from "react-tabs-redux";
import Cookies from "universal-cookie";

import { Link, withRouter } from "react-router-dom";
import "./style.css";

class ActiveOrdersList extends Component {
  componentWillMount() {
    const cookies = new Cookies();
    var token = cookies.get("token");
    this.props.dispatch(fetchServicesTaken(token));
  }

  render() {
    const { servicesTaken } = this.props;

    const TakenOrders = servicesTaken.filter(
      order => order.order_type === "order"
    );
    const TakenComplaints = servicesTaken.filter(
      order => order.order_type === "complaint"
    );
    const TakenInternalOrders = servicesTaken.filter(
      order => order.order_type === "int_order"
    );
    return (
      <div className="BasicList__container">
        <h4> Pågående ärenden </h4>
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
            {TakenOrders.length ? (
              <ul className="BasicList__list">
                {TakenOrders.map(order => (
                  <li key={order.service_id}>
                    <Link to={`/admin/orders/${order.service_id}`}>
                      <div className="edit">
                        <p>Beställare : XXXX, orderId: </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="BasicList__container">
                <p>Inga pågående ärenden att visa</p>
              </div>
            )}
          </TabContent>
          <TabContent for="reklamationer">
            {TakenComplaints.length ? (
              <ul className="BasicList__list">
                {TakenComplaints.map(order => (
                  <li key={order.service_id}>
                    <Link to={`/admin/orders/${order.service_id}`}>
                      <div className="edit">
                        <p>Beställare : XXXX, orderId: </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="BasicList__container">
                <p>Inga pågående reklamationer att visa</p>
              </div>
            )}
          </TabContent>
          <TabContent for="Interna">
            {TakenInternalOrders.length ? (
              <ul className="BasicList__list">
                {TakenInternalOrders.map(order => (
                  <li key={order.service_id}>
                    <Link to={`/admin/orders/${order.service_id}`}>
                      <div className="edit">
                        <p>Beställare : XXXX, orderId: </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="BasicList__container">
                <p>Inga pågående interna ärenden att visa</p>
              </div>
            )}
          </TabContent>
        </Tabs>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  servicesTaken: state.adminOrders.servicesTaken
});

export default withRouter(connect(mapStateToProps)(ActiveOrdersList));
