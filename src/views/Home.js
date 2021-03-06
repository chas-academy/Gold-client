import React, { Component } from "react";
import Cookies from "universal-cookie";
import { CustomerHome, EmployeeHome, AdminHome } from "../views";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userType: ""
    };
  }

  componentDidMount() {
    const cookies = new Cookies();
    var token = cookies.get("token");

    if (token) {
      const user = JSON.parse(
        window.atob(
          token
            .split(".")[1]
            .replace("-", "+")
            .replace("_", "/")
        )
      );
      switch (user.user_type) {
        case "admin":
          this.setState({ userType: "admin" });
          break;
        case "customer":
          this.setState({ userType: "customer" });
          break;
        case "employee":
          this.setState({ userType: "employee" });
          break;
        default:
          this.props.history.push("/");
      }
    } else {
      this.props.history.push("/");
    }
  }

  render() {
    const { userType } = this.state;
    function renderSwitch(state) {
      switch (userType) {
        case "admin":
          return (
              <AdminHome />
          );
          break;
        case "customer":
          return <CustomerHome />;
          break;
        case "employee":
          return <EmployeeHome />;
          break;
        default:
          return <div />;
      }
    }
    return renderSwitch();
  }
}

export default Home;
