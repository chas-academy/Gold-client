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
      const { complaints, isFetching } = this.props;

      if(isFetching) {
        return <i className="fas fa-circle-notch fa-spin"></i>;
      }

      const AssignedComplaints = complaints.filter(order => order.service.status === "assigned");
      const DoneComplaints = complaints.filter(order => order.service.status === "done");
  

    return (
      
      <div className="BasicList__container">
        <h4> Reklamationer </h4>
        <Tabs>
          <div className="history-tabs">
            <TabLink className="history-tablink" to="hanterade">
              Hanterade
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
                    <Link to={`/admin/services/${order.service_id}`}>
                      <div className="edit">
                        {order.service.company_name ? (
                          <p>{order.service.company_name}</p>
                        ) : (
                          <p>{order.service.con_pers}</p>
                        )}
                        <p>Anställd: {}</p>
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
            {DoneComplaints.length ? (
              <ul className="BasicList__list">
                {DoneComplaints.map(order => (
                  <li key={order.service_id}>
                    <Link to={`/admin/services/${order.service_id}`}>
                      <div className="edit">
                        {order.service.company_name ? (
                          <p>{order.service.company_name}</p>
                        ) : (
                          <p>{order.service.con_pers}</p>
                        )}
                        <p>Anställd: {}</p>
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
         )
    } 
  }

  const mapStateToProps = state => ({ 
    complaints: state.adminOrders.complaints, 
    isFetching: state.adminOrders.isFetching
  });

export default withRouter(connect(mapStateToProps)(ComplaintsList));
