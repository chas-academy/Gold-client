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
      isAdmin: false,
      isCustomer: false,
      isEmployee: false
    };
  }
  
  componentDidMount() {
  
    
    // switch(true) {
    //     case localStorage.getItem('admin'):
    //         this.setState({ isAdmin: true })
    //         break;
    //     case localStorage.getItem('customer'):
    //         this.setState({ isCustomer: true})
    //         break;
    //     case localStorage.getItem('employee'):
    //         this.setState({ isEmployee: true})
    //         break;
    //     default:
    // redirect to login
    // }
  }

  render() {
    // const { isAdmin, isCustomer, isEmployee } = this.state;
    const cookies = new Cookies();
    var token = cookies.get("token");
  
    const user = JSON.parse(
      window.atob(
        token
          .split(".")[1]
          .replace("-", "+")
          .replace("_", "/")
      ))

      console.log(user)

    return (
      // {switch (true) {
      //     case isAdmin:
      // <div>
      //   <AdminTopNav />
      //   <AdminHomeTop />
      //   <MapContainer />
      //   <AdminBottomNav />
      // </div>
      //         break;
      //     case isCustomer:
      // <CustomerHome />
      //         break;
      //     case isEmployee:
      <EmployeeHome />
      //         break;
      //     default:
      //         // redirect to login
      // }}
    );
  }
}

export default Home;
