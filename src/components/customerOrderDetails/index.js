import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchService } from "../../redux/actions/customers/Services";
import Cookies from "universal-cookie";
import moment from "moment";
import { withRouter } from "react-router-dom";

class CustomerOrderDetails extends Component {

  componentDidMount() {
    const cookies = new Cookies();
    var token = cookies.get("token");

    this.props.dispatch(fetchService(token, this.props.id));
  }

  render() {
    const { isFetching, service } = this.props;
    
    if(isFetching) {
      return <i className="fas fa-circle-notch fa-spin"></i>;
    }
    
    return (
      <div className="EmployeeOrderDetails">
            <ul className="BasicList__list orderDetails">
              <li>
                <p><strong>Datum:</strong> {moment(service.datetime).format('Y-MM-DD HH:mm')}</p>
                {service.order ? <div>
                  <p><strong>Adress:</strong> {service.order.address}</p>
                  <p><strong>Description:</strong> {service.order.description}</p>

                </div> : ('')}
                {service.complaint ? <div>
                  <p><strong>Adress:</strong> {service.complaint.order.address}</p>
                  <p><strong>Description:</strong> {service.complaint.description}</p>

                </div> : ('')}
              </li>
            </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  service: state.customer.service,
  isFetching: state.customer.isFetching
});

export default withRouter(connect(mapStateToProps)(CustomerOrderDetails));