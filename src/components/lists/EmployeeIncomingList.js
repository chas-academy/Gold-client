import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchIncoming } from "../../redux/actions/employees";
import { Link, withRouter } from "react-router-dom";
import { Tabs, TabLink, TabContent } from "react-tabs-redux";
import Cookies from "universal-cookie";
import "./style.css";

class EmployeeIncomingList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
      )
    );

    this.props.dispatch(fetchIncoming(user.id, token));
  }

  render() {
    const { isFetching, Incoming } = this.props;

    const newOrders = Incoming.filter(order => order.order_type === "order");
    const newComplaints = Incoming.filter(order => order.order_type === "complaint");
    const newInternal = Incoming.filter(order => order.order_type === "int_order");



    return (
        <div className="BasicList__container">
          <h4> nya ärenden  </h4>
        <p>
          Här samlas alla dina inkomna jobb. Klicka på ärendet för att få mer
          detaljer och bekräfta att du påbörjat jobbet när du har anlänt till
          kunden med knappen "Påbörja jobb".
        </p>
        <hr />
          <Tabs>
            <div className="history-tabs">
              <TabLink className="history-tablink" to="beställningar">
                Beställningar
              </TabLink>
              <TabLink className="history-tablink" to="reklamationer">
                Reklamationer
              </TabLink>
              <TabLink className="history-tablink" to="interna">
                Interna
              </TabLink>
            </div>
            <TabContent for="beställningar">
              {newOrders.length ? (
                <ul className="BasicList__list">
                  {newOrders.map(order => (
                    <li key={order.id}>
                      <Link to={`/admin/services/${order.id}`}>
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
                  <p>Inga nya ärenden att visa</p>
                </div>
              )}
            </TabContent>
            <TabContent for="reklamationer">
              {newComplaints.length ? (
                <ul className="BasicList__list">
                  {newComplaints.map(order => (
                    <li key={order.id}>
                      <Link to={`/admin/services/${order.id}`}>
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
                  <p>Inga nya reklamationer att visa</p>
                </div>
              )}
            </TabContent>
            <TabContent for="interna">
              {newInternal.length ? (
                <ul className="BasicList__list">
                  {newInternal.map(order => (
                    <li key={order.id}>
                      <Link to={`/admin/services/${order.id}`}>
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
  Incoming: state.employee.Incoming,
  isFetching: state.employee.isFetching
});

export default withRouter(connect(mapStateToProps)(EmployeeIncomingList));
