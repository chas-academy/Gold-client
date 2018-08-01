import React, { Component } from "react";
import Cookies from "universal-cookie";
import { fetchServicesNew, fetchServicesAssigned, fetchServicesDone } from "../../redux/actions/admin/Orders";
import { connect } from "react-redux";

import { AdminTopNav, AdminTabs, MapContainer } from "../../components";

class AdminHome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    const cookies = new Cookies();
    var token = cookies.get("token");

    this.props.dispatch(fetchServicesNew(token));
    this.props.dispatch(fetchServicesAssigned(token));
    this.props.dispatch(fetchServicesDone(token));
  }

  render() {

    const { servicesNew, servicesAssigned, servicesDone } = this.props;

    return (
      <div>
        <AdminTopNav />
        <MapContainer servicesNew={servicesNew} servicesAssigned={servicesAssigned} servicesDone={servicesDone} />
        <AdminTabs servicesNew={servicesNew} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
    servicesNew: state.adminOrders.servicesNew,
    servicesAssigned: state.adminOrders.servicesAssigned,
    servicesDone: state.adminOrders.servicesDone,  
  });
  
export default connect(mapStateToProps)(AdminHome);
  
