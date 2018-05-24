import React, { Component } from "react";
import { Tabs, TabLink, TabContent } from "react-tabs-redux";
import { Link, withRouter } from "react-router-dom";
import Moment from "react-moment";

import "./style.css";

class AdminHomeTop extends Component {

  render() {
    const { servicesNew, isFetching } = this.props;
    const newOrders = servicesNew.filter(order => order.order_type === "order");
    const newComplaints = servicesNew.filter(
      order => order.order_type === "complaint"
    );

    return (
      <div className="BasicList__container AdminHome">
          <Tabs>
            <div className="history-tabs">
              <TabLink className="history-tablink" to="beställningar">
                NYA
              </TabLink>
              <TabLink className="history-tablink" to="reklamationer">
                REKLAMATIONER
              </TabLink>
            </div>
            <TabContent for="beställningar" className="orders-list">
            {isFetching ? 
             <i className="fas fa-circle-notch fa-spin"></i>
              : 
              newOrders.length ? (
                <ul className="BasicList__list">
                  {newOrders.map(order => (
                    <li key={order.id}>
                    {console.log(order)}
                      <Link to={`/admin/services/${order.id}`}>
                        <div className="edit">
                          {order.company_name ? (
                            <div className="top_new">
                            <p className="top_date"> <Moment format="DD/MM HH:mm">{order.datetime}</Moment> </p>
                            <h5 className="top_name"> {order.company_name} </h5>
                            </div>
                          ) : (
                            <div className="top_new">
                            <p className="top_date"> <Moment format="DD/MM HH:mm">{order.datetime}</Moment></p>
                            <h5 className="top_name"> {order.con_pers} </h5>
                            </div>
                          )}
                            <p className="top_handle"> Hantera </p>
                        </div>
                      </Link>
                      <hr />
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
            {isFetching ? 
             <i className="fas fa-circle-notch fa-spin"></i>
              : 
              newComplaints.length ? (
                <ul className="BasicList__list">
                  {newComplaints.map(order => (
                    <li key={order.id}>
                      <Link to={`/admin/complaints/${order.id}`}>
                        <div className="edit">
                          {order.company_name ? (
                            <div className="top_new">
                              <p className="top_date"> <Moment format="DD/MM HH:mm">{order.datetime}</Moment> </p>
                              <h5 className="top_name">{order.company_name} </h5>
                            </div>
                          ) : (
                            <div className="top_new">
                              <p className="top_date"> <Moment format="DD/MM HH:mm">{order.datetime}</Moment> </p>
                              <h5 className="top_name">{order.con_pers} </h5>
                            </div>
                          )}
                          <p className="top_handle"> Hantera </p>
                        </div>
                      </Link>
                      <hr />
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
