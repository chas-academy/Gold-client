import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchInternalOrders } from "../../redux/actions/admin/Orders";
import Cookies from "universal-cookie";
import { Tabs, TabLink, TabContent } from "react-tabs-redux";
import { CreateInternalOrder } from '../../components';
import { Link, withRouter } from "react-router-dom";
import Moment from "react-moment";

import "./style.css";

class InternalOrdersList extends Component {
  componentWillMount() {
    const cookies = new Cookies();
    var token = cookies.get("token");
    this.props.dispatch(fetchInternalOrders(token));
    
  }

  render() {
    const { internalOrders, isFetching } = this.props;

    if(isFetching) {
      return <i className="fas fa-circle-notch fa-spin"></i>;
    }

    const AssignedInternalOrders = internalOrders.filter(
      order => order.service.status === "assigned"
    );
    const DoneInternalOrders = internalOrders.filter(
      order => order.service.status === "done"
    );

    return (
      <div className="BasicList__container">
        <h4> Interna ärenden </h4>
        <CreateInternalOrder />
        <Tabs>
          <div className="history-tabs">
            <TabLink className="history-tablink" to="hanterade">
              Skapade
            </TabLink>
            <TabLink className="history-tablink" to="avslutade">
              Avslutade
            </TabLink>
          </div>
          <TabContent for="hanterade">
            {AssignedInternalOrders.length ? (
              <ul className="BasicList__list">
                {AssignedInternalOrders.map(order => (
                  <li key={order.service_id}>
                    <Link to={`/admin/services/${order.service_id}`}>
                      <div className="edit">
                        <p>Ärende nr: {order.service.id}</p>
                        <p>Skapat: <Moment format="DD/MM HH:mm">{order.service.createdAt}</Moment></p>
                      </div>
                      <div className="employees">
                        Tilldelat:
                      {order.service.employees.map(employee => (
                        <p className="employee"> {employee.name} </p>
                      ))}
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
            {DoneInternalOrders.length ? (
              <ul className="BasicList__list">
                {DoneInternalOrders.map(order => (
                  <li key={order.service_id}>
                    <Link to={`/admin/services/${order.service_id}`}>
                      <div className="edit">
                        <p>Ärende nr: {order.service.id}</p>
                        <p>Avslutat: <Moment format="DD/MM HH:mm">{order.service.updatedAt}</Moment></p>
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
        </Tabs>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  internalOrders: state.adminOrders.internalOrders,
  isFetching: state.adminOrders.isFetching
});

export default withRouter(connect(mapStateToProps)(InternalOrdersList));
