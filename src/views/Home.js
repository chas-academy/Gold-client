import React, { Component } from "react";
import Cookies from "universal-cookie";
import { CustomerHome, EmployeeHome } from "../views";

import {
  AdminTopNav,
  AdminHomeTop,
  AdminBottomNav,
  MapContainer
} from "./../components";

import "./style.css";

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isAdmin: null,
      isCustomer: null,
      isEmployee: null
    };
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

    switch (true) {
      case user.user_type === "admin":
        this.setState({ isAdmin: true });
        break;
      case user.user_type === "employee":
        this.setState({ isEmployee: true });
        break;
      case user.user_type === "customer":
        this.setState({ isCustomer: true });
        break;
      default:
        this.props.history.push("/login");
        break;
    }

  }

  render() {
    const { isAdmin, isCustomer, isEmployee } = this.state;

    switch (true) {
      case isAdmin:
        return (
          <div>
            <AdminTopNav />
            <AdminHomeTop />
            <MapContainer />
            <AdminBottomNav />
          </div>
        );
        break;
      case isEmployee:
        return <EmployeeHome />;
        break;
      case isCustomer:
        return <CustomerHome />;
        break;
      default: 
        return <p>Logga in</p>  
        break;
    }
  }
}

export default Home;
