import React, { Component } from "react";
import { connect } from "react-redux";
import { Tabs, TabLink, TabContent } from "react-tabs-redux";

import Cookies from "universal-cookie";
import { Link, withRouter } from "react-router-dom";
import "./style.css";

class AdminHomeTop extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { servicesNew } = this.props;
    const newOrders = servicesNew.filter(order => order.order_type === "order");
    const newComplaints = servicesNew.filter(
      order => order.order_type === "complaint"
    );

    const { services } = this.props;
    return (
      <div className="BasicList__container AdminHome">
          <h4> Dagens ärenden </h4>
          <Tabs>
            <div className="history-tabs">
              <TabLink className="history-tablink" to="beställningar">
                Beställningar
              </TabLink>
              <TabLink className="history-tablink" to="reklamationer">
                Reklamationer
              </TabLink>
            </div>
            <TabContent for="beställningar" className="orders-list-fml">
              {newOrders.length ? (
                <ul className="BasicList__list">
                  {newOrders.map(order => (
                    <li key={order.id}>
                      <Link to={`/admin/services/${order.id}`}>
                        <div className="edit">
                          {order.company_name ? (
                            <p> {order.company_name} </p>
                          ) : (
                            <p> {order.con_pers} </p>
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
                      <Link to={`/admin/complaints/${order.id}`}>
                        <div className="edit">
                          {order.company_name ? (
                            <p> {order.company_name} </p>
                          ) : (
                            <p> {order.con_pers} </p>
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

export default withRouter(AdminHomeTop);
