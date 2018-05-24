import React, { Component } from "react";
import { connect } from "react-redux";
import { Tabs, TabLink, TabContent } from "react-tabs-redux";
import { fetchServices } from "../../redux/actions/customers/Services";
import Cookies from "universal-cookie";
import moment from "moment";

import { Link, withRouter } from "react-router-dom";
import "./style.css";

class CustomerHistoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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

    this.props.dispatch(fetchServices(token, user.id));
  }



  render() {

    const { isFetching, services } = this.props;
    var Orders = [];
    var Complaints = [];
    if (services.services) {
      Orders = services.services.filter(
        order => order.order_type === "order"
      );
      Complaints = services.services.filter(
        order => order.order_type === "complaint"
      );
    }
    
    if(isFetching) {
      return <i className="fas fa-circle-notch fa-spin"></i>
    }


    return (
      <div className="BasicList__container">
        <h4>Avslutade ärenden</h4>
        <Tabs>
          <div className="history-tabs">
            <TabLink className="history-tablink" to="beställningar">
              Beställningar
            </TabLink>
            <TabLink className="history-tablink" to="reklamationer">
              Reklamationer
            </TabLink>
          </div>
          <TabContent for="beställningar">
            {Orders.length ? (
              <ul className="BasicList__list">
                 {Orders.map(order => (
                      <li key={order.id}>
                          <div className="edit">
                            <Link to={`/services/${order.id}`}>
                                <p>Beställningsnummer - {order.id} <br></br> Beställare - {order.con_pers}</p>
                                <p>Datum:<br></br>{moment(order.datetime).format('Y-MM-DD HH:mm')}</p>
                                {order.status == "new" ? (
                                  <p><strong>Status:</strong> Hanteras</p>
                                ) : (
                                  order.status == "assigned" ? (
                                    <p><strong>Status:</strong> Pågående</p>
                                  ) : (
                                    order.status == "done" ? (
                                      <p><strong>Status:</strong> Klart</p>
                                    ) : ('')
                                  )
                                )}
                            </Link>
                            {order.status == "done" ?
                              <Link to={`/complaints/${order.id}`}><i className="fas fa-exclamation-triangle" /> Skapa Reklamation</Link>
                              : ('')
                            }
                          </div>
                          <hr></hr>
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
            {Complaints.length ? (
              <ul className="BasicList__list">
                    {Complaints.map(complaint => (
                      <li key={complaint.id}>
                        <div className="edit">
                          <Link to={`/services/${complaint.id}`}>
                              <p>Beställare - {complaint.con_pers}</p>
                              <p>Datum:<br></br>{moment(complaint.datetime).format('Y-MM-DD HH:mm')}</p>
                                {complaint.status == "new" ? (
                                  <p><strong>Status:</strong> Hanteras</p>
                                ) : (
                                  complaint.status == "assigned" ? (
                                    <p><strong>Status:</strong> Pågående</p>
                                  ) : (
                                    complaint.status == "done" ? (
                                      <p><strong>Status:</strong> Klart</p>
                                    ) : ('')
                                  )
                                )}
                          </Link>
                        </div>
                        <hr></hr>
                      </li>
                    ))}
              </ul>
            ) : (
              <div className="BasicList__container inner">
                <p>Inga reklamationer att visa</p>
              </div>
            )}
          </TabContent>
        </Tabs>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  services: state.customer.services,
  isFetching: state.customer.isFetching
});

export default withRouter(connect(mapStateToProps)(CustomerHistoryList));