import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchServicesAssigned } from "../../redux/actions/admin/Orders";
import { Tabs, TabLink, TabContent } from "react-tabs-redux";
import Cookies from "universal-cookie";

import { Link, withRouter } from "react-router-dom";
import "./style.css";

class AssignedOrdersList extends Component {
  componentWillMount() {
    const cookies = new Cookies();
    var token = cookies.get("token");
    this.props.dispatch(fetchServicesAssigned(token));
  }

  render() {
    const { servicesAssigned } = this.props;
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
            {assignedOrders.length ? (
              <ul className="BasicList__list">
                {assignedOrders.map(order => (
                  <li key={order.id}>
                    <Link to={`/admin/orders/${order.id}`}>
                      <div className="edit">
                        {order.company_name ? (
                          <p>Kund: {order.company_name} </p>
                        ) : (
                          <p>Kund: {order.con_pers} </p>
                        )}
                        <p> Anställd: {} </p>
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
            {assignedComplaints.length ? (
              <ul className="BasicList__list">
                {assignedComplaints.map(order => (
                  <li key={order.id}>
                    <Link to={`/admin/orders/${order.id}`}>
                      <div className="edit">
                        {order.company_name ? (
                          <p>Kund: {order.company_name} </p>
                        ) : (
                          <p>Kund: {order.con_pers} </p>
                        )}
                        <p> Anställd: {} </p>
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
          {assignedInternalOrders.length ? (
            <ul className="BasicList__list">
              {assignedInternalOrders.map(order => (
                <li key={order.id}>
                  <Link to={`/admin/orders/${order.id}`}>
                    <div className="edit">
                      {order.company_name ? (
                        <p>Kund: {order.company_name} </p>
                      ) : (
                        <p>Kund: {order.con_pers} </p>
                      )}
                      <p> Anställd: {} </p>
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
  servicesAssigned: state.adminOrders.servicesAssigned
});

export default withRouter(connect(mapStateToProps)(AssignedOrdersList));
