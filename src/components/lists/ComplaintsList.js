import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchComplaints } from "../../redux/actions/admin/Orders";
import Cookies from "universal-cookie";
import { Tabs, TabLink, TabContent } from "react-tabs-redux";

import { Link, withRouter } from "react-router-dom";
import './style.css'


class ComplaintsList extends Component {

  componentWillMount() { 
    const cookies = new Cookies();
    var token = cookies.get("token");
    this.props.dispatch(fetchComplaints(token));
  }

  render() {
      const { complaints } = this.props;

      const AssignedComplaints = complaints.filter(order => order.service.status === "assigned");
      const TakenComplaints = complaints.filter(order => order.service.status === "taken");
      const DoneComplaints = complaints.filter(order => order.service.status === "done");
  

    return (
      
      <div className="BasicList__container">
        <h4> Reklamationer </h4>
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
            {AssignedComplaints.length ? (
              <ul className="BasicList__list">
                {AssignedComplaints.map(order => (
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
              <div className="BasicList__container">
                <p>Inga beställningar att visa</p>
              </div>
            )}
          </TabContent>
          <TabContent for="pågående">
            {TakenComplaints.length ? (
              <ul className="BasicList__list">
                {TakenComplaints.map(order => (
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
              <div className="BasicList__container">
                <p>Inga beställningar att visa</p>
              </div>
            )}
          </TabContent>
          <TabContent for="avslutade">
            {DoneComplaints.length ? (
              <ul className="BasicList__list">
                {DoneComplaints.map(order => (
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
              <div className="BasicList__container">
                <p>Inga beställningar att visa</p>
              </div>
            )}
          </TabContent>
          </Tabs>
        </div>  
         )
    } 
  }

  const mapStateToProps = state => ({ 
    complaints: state.adminOrders.complaints, 
  });

export default withRouter(connect(mapStateToProps)(ComplaintsList));
