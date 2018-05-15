import React, { Component } from "react";
import { connect } from "react-redux";
import { Tabs, TabLink, TabContent } from "react-tabs-redux";
// import { fetchServicesDone } from "../../redux/actions/customers";
import Cookies from "universal-cookie";

import { Link, withRouter } from "react-router-dom";
import "./style.css";
import CompletedOrders from "../../views/admin/orders/CompletedOrders";

class CustomerHistoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

    // this.props.dispatch(fetchServicesDone(token));
  }



  render() {

    const { servicesDone } = this.props;

    const completedOrders = [];
    const completedComplaints = [];

    // const completedOrders = servicesDone.filter(
    //   order => order.order_type === "order"
    // );
    // const completedComplaints = servicesDone.filter(
    //   order => order.order_type === "complaint"
    // );


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
          </div>
          <TabContent for="beställningar">
            {completedOrders.length ? (
              <ul className="BasicList__list">
                 {completedOrders.map(order => (
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
                    {completedComplaints.map(order => (
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
        </Tabs>
      </div>
    );
  }
}

const mapStateToProps = state => ({
//   servicesDone: state.customers.servicesDone
});

export default withRouter(connect(mapStateToProps)(CustomerHistoryList));
