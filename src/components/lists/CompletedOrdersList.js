import React, { Component } from "react"
import { connect } from "react-redux";
import { Tabs, TabLink, TabContent } from "react-tabs-redux";
import { fetchServicesDone } from "../../redux/actions/admin/Orders";
import Cookies from "universal-cookie";

import { Link, withRouter } from "react-router-dom";
import './style.css'


class CompletedOrdersList extends Component {
  constructor (props) {
    super(props);
    this.state = { 
      isAdmin: false
    }
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
      ))

    this.props.dispatch(fetchServicesDone(token));

    if(user.user_type === 'admin') {
      this.setState({ isAdmin: true })
    }
    }
  render() {
      const { isAdmin } = this.state;
      const { services } = this.props;

      const { servicesDone } = this.props; 
      const completedOrders = servicesDone.filter(order => order.order_type === 'order')    
      const completedComplaints = servicesDone.filter(order => order.order_type === 'complaint')    
      const completedInternalOrders = servicesDone.filter(order => order.order_type === 'int_order')    

    
      console.log(services);
      return (
    services ?
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
              <TabLink className="history-tablink" to="Interna">
                Interna 
              </TabLink>
            </div>
          <TabContent for="beställningar">
          <ul className="BasicList__list">
              {isAdmin === true ?
              services.map(order => (
                <li key={order.service_id}>
                {console.log(order)}
                  <Link to={`/admin/orders/${order.service_id}`}>
                    <div className="edit">
                      <p>Beställare : XXXX, orderId: </p>
                      <i className="fas fa-exclamation-triangle"></i> Skapa Reklamation
                    </div>
                  </Link>
                </li>
                ))
              : ( 
                services.map(order => (
                  <li key={order.service_id}>
                    <Link to={`/orders/${order.service_id}`}>
                      <div className="edit">
                        <p>Beställare : XXXX, orderId: </p>
                        <i className="fas fa-exclamation-triangle"></i> Skapa Reklamation
                      </div>
                    </Link>
                  </li>
                  ))
                )
              }
          </ul>
          </TabContent>
          <TabContent for="reklamatinoer">
          <ul className="BasicList__list">
              {isAdmin === true ?
              services.map(order => (
                <li key={order.service_id}>
                {console.log(order)}
                  <Link to={`/admin/orders/${order.service_id}`}>
                    <div className="edit">
                      <p>Beställare : XXXX, orderId: </p>
                      <i className="fas fa-exclamation-triangle"></i> Skapa Reklamation
                    </div>
                  </Link>
                </li>
                ))
              : ( 
                services.map(order => (
                  <li key={order.service_id}>
                    <Link to={`/orders/${order.service_id}`}>
                      <div className="edit">
                        <p>Beställare : XXXX, orderId: </p>
                        <i className="fas fa-exclamation-triangle"></i> Skapa Reklamation
                      </div>
                    </Link>
                  </li>
                  ))
                )
              }
          </ul>
          </TabContent>
          <TabContent for="interna">
          <ul className="BasicList__list">
              {isAdmin === true ?
              services.map(order => (
                <li key={order.service_id}>
                {console.log(order)}
                  <Link to={`/admin/orders/${order.service_id}`}>
                    <div className="edit">
                      <p>Beställare : XXXX, orderId: </p>
                      <i className="fas fa-exclamation-triangle"></i> Skapa Reklamation
                    </div>
                  </Link>
                </li>
                ))
              : ( 
                services.map(order => (
                  <li key={order.service_id}>
                    <Link to={`/orders/${order.service_id}`}>
                      <div className="edit">
                        <p>Beställare : XXXX, orderId: </p>
                        <i className="fas fa-exclamation-triangle"></i> Skapa Reklamation
                      </div>
                    </Link>
                  </li>
                  ))
                )
              }
          </ul>
          </TabContent>

        </Tabs>
      </div>
      : (
        <div className="BasicList__container">
          <h4> Avslutade ärenden </h4>
          <p>Inga avslutade ärenden att visa</p>
      </div>  
      )
    );
  }
}

const mapStateToProps = state => ({ 
  services: state.adminOrders.services, 
});


export default withRouter(connect(mapStateToProps)(CompletedOrdersList));
