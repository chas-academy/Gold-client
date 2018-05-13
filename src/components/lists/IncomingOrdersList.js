import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchServicesNew } from "../../redux/actions/admin/Orders";
import { Tabs, TabLink, TabContent } from "react-tabs-redux";

import Cookies from "universal-cookie";
import { Link, withRouter } from "react-router-dom";
import "./style.css";

class IncomingOrdersList extends Component {
  componentWillMount() {
    const cookies = new Cookies();
    var token = cookies.get("token");
    this.props.dispatch(fetchServicesNew(token));
  }

  render() {
    const { servicesNew } = this.props;
    const newOrders = servicesNew.filter(order => order.order_type === "order");
    const newComplaints = servicesNew.filter(
      order => order.order_type === "complaint"
    );


    return (
      <div className="BasicList__container">
        <h4> Nya ärenden </h4>
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
            {newOrders.length ? (
              <ul className="BasicList__list">
                {newOrders.map(order => (
                  <li key={order.id}>
                    <Link to={`/admin/orders/${order.id}`}>
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
                ))}
              </ul>
            ) : (
              <div className="BasicList__container">
                <h4> Nya ärenden </h4>
                <p>Inga nya ärenden att visa</p>
              </div>
            )}
          </TabContent>
          <TabContent for="reklamationer">
          {newComplaints.length ? (
            <ul className="BasicList__list">
              {newComplaints.map(order => (
                <li key={order.id}>
                  <Link to={`/admin/orders/${order.id}`}>
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
              ))}
            </ul>
          ) : (
              <div className="BasicList__container">
                <h4> Nya ärenden </h4>
                <p>Inga nya reklamationer att visa</p>
              </div>
            )}
          </TabContent>
        </Tabs>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  servicesNew: state.adminOrders.servicesNew
});

export default withRouter(connect(mapStateToProps)(IncomingOrdersList));
