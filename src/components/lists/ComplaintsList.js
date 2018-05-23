import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchComplaints } from "../../redux/actions/admin/Orders";
import Cookies from "universal-cookie";
import { Tabs, TabLink, TabContent } from "react-tabs-redux";
import { CreateComplaint } from '../../components';
import { Link, withRouter } from "react-router-dom";
import Moment from "react-moment";

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
        <CreateComplaint />
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
                  <li key={order.id}>
                    <Link to={`/admin/services/${order.id}`}>
                      <div className="edit">
                        {order.service.company_name ? (
                          <div>
                          <h5 className="customer">{order.service.company_name} </h5>
                          <p>Kontaktperson: {order.service.con_pers} </p>
                          </div>
                        ) : (
                          <h5 className="customer">{order.service.con_pers} </h5>
                        )}
                        <Moment format="DD/MM HH:mm">{order.service.datetime}</Moment>
                      </div>
                      <div className="employees">
                        Tilldelat:
                      {order.service.employees.map(employee => (
                        <p className="employee"> {employee.name} </p>
                      ))}
                      </div>  
                    </Link>
                    <hr />
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
                      </div>
                      <div className="edit">
                      <div className="employees">
                        Avslutat av:
                        {order.service.employees.map(employee => (
                          <p className="employee"> {employee.name} </p>
                        ))}
                      </div>     
                      <Moment format="DD/MM HH:mm">{order.service.updatedAt}</Moment>    
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
