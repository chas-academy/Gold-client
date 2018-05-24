import React, { Component } from "react";
import { connect } from "react-redux";
import { Tabs, TabLink, TabContent } from "react-tabs-redux";
import { fetchServicesDone } from "../../redux/actions/admin/Orders";
import Cookies from "universal-cookie";

import { Link, withRouter } from "react-router-dom";
import "./style.css";
import CompletedOrders from "../../views/admin/orders/CompletedOrders";
import moment from "moment";

class CompletedOrdersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdmin: false
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

    this.props.dispatch(fetchServicesDone(token));

    if (user.user_type === "admin") {
      this.setState({ isAdmin: true });
    }
  }
  render() {
    const { isAdmin } = this.state;

    const { isFetching, servicesDone } = this.props;

    const completedOrders = servicesDone.filter(
      order => order.order_type === "order"
    );
    const completedComplaints = servicesDone.filter(
      order => order.order_type === "complaint"
    );
    const completedInternalOrders = servicesDone.filter(
      order => order.order_type === "int_order"
    );

    if(isFetching) {
      return <i className="fas fa-circle-notch fa-spin"></i>
    }

    return (
      <div className="BasicList__container">
        <h4>Avslutade ärenden</h4>
        <Tabs>
        <div className="history-tabs">
          <TabLink className="history-tablink" to="beställningar">
            <i className="fas fa-list slide"></i>
            <p>Beställningar</p>
          </TabLink>
          <TabLink className="history-tablink" to="reklamationer">
            <i className="fas fa-exclamation-circle slide"></i>
            <p>Reklamationer</p>
          </TabLink>
          <TabLink className="history-tablink" to="Interna">
            <i className="fas fa-envelope-open slide"></i>
            <p>Interna</p>
          </TabLink>
      </div>
          <TabContent for="beställningar">
            {completedOrders.length ? (
              <ul className="BasicList__list">
                {isAdmin === true
                  ? completedOrders.map(order => (
                      <li key={order.id}>
                        <div className="edit">
                          <Link to={`/admin/services/${order.id}`}>
                            <p>Beställare - {order.company_name ? order.company_name : order.con_pers}
                              {order.company_name ?  <span><br></br>Kontaktperson - {order.con_pers}</span> : ('')}
                            </p>                         
                            <div className="edit">
                              <p>Avslutat: {moment(order.updatedAt).format('MM-DD HH:mm')}</p>
                            </div>
                          </Link>
                          Skapa reklamation 
                          </div>
                          <hr />
                      </li>
                    ))
                  : completedOrders.map(order => (
                    <li key={order.id}>
                        <div className="edit">
                          <Link to={`/services/${order.id}`}>
                            <p>Beställare - {order.company_name ? order.company_name : order.con_pers}
                              {order.company_name ?  <span><br></br>Kontaktperson - {order.con_pers}</span> : ('')}
                            </p>                         
                            <div className="edit">
                              <p>Avslutat: {moment(order.updatedAt).format('MM-DD HH:mm')}</p>
                            </div>
                          </Link>
                          Skapa reklamation 
                          </div>
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
          <TabContent for="reklamationer">
            {completedComplaints.length ? (
              <ul className="BasicList__list">
                {isAdmin === true
                  ? completedComplaints.map(order => (
                      <li key={order.id}>
                          <div className="edit">
                          <Link to={`/admin/services/${order.id}`}>
                          <p>Beställare - {order.company_name ? order.company_name : order.con_pers}
                            {order.company_name ?  <span><br></br>Kontaktperson - {order.con_pers}</span> : ('')}
                          </p>  
                            <div className="edit">
                            <p>Avslutat:{moment(order.updatedAt).format('MM-DD HH:mm')}</p>
                            </div>
                          </Link>
                          </div>
                          <hr />
                      </li>
                    ))
                  : completedComplaints.map(order => (
                      <li key={order.id}>
                        <div className="edit">
                          <Link to={`/services/${order.id}`}>
                          <p>Beställare - {order.company_name ? order.company_name : order.con_pers}
                            {order.company_name ?  <span><br></br>Kontaktperson - {order.con_pers}</span> : ('')}
                          </p>                         
                          <div className="edit">
                            <p>Avslutat: {moment(order.updatedAt).format('MM-DD HH:mm')}</p>
                          </div>
                        </Link>
                        </div>
                        <hr />
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
          {completedInternalOrders.length ? (
            <ul className="BasicList__list">
              {isAdmin === true
                ? completedInternalOrders.map(order => (
                    <li key={order.id}>
                      <div className="edit">
                        <Link to={`/admin/services/${order.id}`}>
                        <p>Ärende nr: {order.id}</p>  
                          <p>Avslutat:<br></br>{moment(order.updatedAt).format('MM-DD HH:mm')}</p>
                        </Link>
                        </div>
                        <hr></hr>
                    </li>
                  ))
                : completedInternalOrders.map(order => (
                  <li key={order.id}>
                    <div className="edit">
                          <Link to={`/services/${order.id}`}>
                          <p>Beställare - {order.company_name ? order.company_name : order.con_pers}
                            {order.company_name ?  <span><br></br>Kontaktperson - {order.con_pers}</span> : ('')}
                          </p>                         
                          <div className="edit">
                            <p>Avslutat: {moment(order.updatedAt).format('MM-DD HH:mm')}</p>
                          </div>
                        </Link>
                        </div>
                        <hr />
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
  servicesDone: state.adminOrders.servicesDone,
  isFetching: state.adminOrders.isFetching
});

export default withRouter(connect(mapStateToProps)(CompletedOrdersList));
