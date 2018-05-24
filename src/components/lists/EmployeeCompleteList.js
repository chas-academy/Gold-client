import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDone } from '../../redux/actions/employees';
import { withRouter, Link } from "react-router-dom";
import Cookies from "universal-cookie";
import { Tabs, TabContent, TabLink } from 'react-tabs-redux';


import './style.css'


class EmployeeCompleteList extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    const cookies = new Cookies();
    var token = cookies.get("token");
    const user = JSON.parse(
      window.atob(
        token
          .split(".")[1]
          .replace("-", "+")
          .replace("_", "/")
      ));

    this.props.dispatch(fetchDone(user.id, token));
  }


  render() {
    const  {isFetching, Done} = this.props;

    if(isFetching) {
      return <i className="fas fa-circle-notch fa-spin"></i>;
    }

    
    const completedOrders = Done.filter(
     order => order.order_type === "order"
    );
    const completedComplaints = Done.filter(
      order => order.order_type === "complaint"
    );
    const completedInternalOrders = Done.filter(
      order => order.order_type === "int_order"
    );


    return (
      <div>
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
            {completedOrders.length ? (
              <ul className="BasicList__list">
                {completedOrders.map(order => (
                      <li key={order.service_id}>
                        <Link to={`/orders/${order.service_id}`}>
                          <div className="edit">
                            <p>Beställare : XXXX, orderId: </p>
                            <i className="fas fa-exclamation-triangle" /> Skapa
                            Reklamation
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
          <TabContent for="reklamationer">
            {completedComplaints.length ? (
              <ul className="BasicList__list">
                {completedComplaints.map(order => (
                  <li key={order.service_id}>
                    <Link to={`/orders/${order.service_id}`}>
                      <div className="edit">
                        <p>Beställare : XXXX, orderId: </p>
                        <i className="fas fa-exclamation-triangle" /> Skapa
                        Reklamation
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="BasicList__container">
                <p>Inga reklamationer att visa</p>
              </div>
            )}
          </TabContent>
          <TabContent for="Interna">
          {completedInternalOrders.length ? (
            <ul className="BasicList__list">
                {completedInternalOrders.map(order => (
                    <li key={order.service_id}>
                      <Link to={`/orders/${order.service_id}`}>
                        <div className="edit">
                          <p>Beställare : XXXX, orderId: </p>
                          <i className="fas fa-exclamation-triangle" /> Skapa
                          Reklamation
                        </div>
                      </Link>
                    </li>
                  ))}
            </ul>
          ) : (
              <div className="BasicList__container">
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
  Done: state.employee.Done,
  isFetching: state.employee.isFetching
});

export default withRouter(connect(mapStateToProps)(EmployeeCompleteList));
