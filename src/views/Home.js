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
      userType: ''
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
    switch(user.user_type) {
        case 'admin':
            this.setState({ userType: 'admin' })
            break;
        case 'customer':
            this.setState({ userType: 'customer'})
            break;
        case 'employee':
            this.setState({ userType: 'employee'})
            break;
        default:
            this.props.history.push('/')
    }
  }

  

  render() {
    const { userType } = this.state;
    function renderSwitch(state) {
      switch(userType) {
        case 'admin': 
          return (<div>
            <AdminTopNav />
            <AdminHomeTop />
            <MapContainer />
            <AdminBottomNav />
          </div>)
          break;
        case 'customer':
          return (<CustomerHome />)
          break;
        case 'employee':
          return (<EmployeeHome />)
          break;
        default:
          return (<div></div>)
      }
    }
    return (
      // {switch (true) {
      //     case isAdmin:
      <div>
        <AdminTopNav />
        <AdminHomeTop />
        <MapContainer />
        <AdminBottomNav />
      </div>
      //         break;
      //     case isCustomer:
      // <CustomerHome />
      //         break;
      //     case isEmployee:
      //<EmployeeHome />
      //         break;
      //     default:
      //         // redirect to login
      // }}
      renderSwitch()
    );
  }
}

export default Home;
