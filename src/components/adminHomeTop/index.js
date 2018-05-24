import React, { Component } from "react";
import { Tabs, TabLink, TabContent } from "react-tabs-redux";
import { Link, withRouter } from "react-router-dom";
import "./style.css";

class AdminHomeTop extends Component {

  render() {
    const { servicesNew } = this.props;
    const newOrders = servicesNew.filter(order => order.order_type === "order");
    const newComplaints = servicesNew.filter(
      order => order.order_type === "complaint"
    );

    return (
      <div className="BasicList__container AdminHome">
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
