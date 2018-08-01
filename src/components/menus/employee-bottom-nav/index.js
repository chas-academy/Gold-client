import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Cookies from "universal-cookie";

class EmployeeBottomNav extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
  }

  logOut(event) {
    const cookies = new Cookies();
    cookies.remove("token");
  }

  render() {
    const { newOrders, newComplaints, newInternal } = this.props;
    return (
      <nav className="bottomNav">
        <ul className="bottomNavList">
          <li>
            <Link to={`/employee/incoming`}>
              {newOrders ? (
                newOrders.length > 0 || newComplaints.length > 0 ? (
                  <i className="fas fa-location-arrow employeeNew" />
                ) : (
                  <i className="fas fa-location-arrow" />
                )
              ) : (
                <i className="fas fa-location-arrow" />
              )}
            </Link>
          </li>
          <li>
            <Link to={`/employee/internal`}>
              {newInternal ? (
                newInternal.length > 0 ? (
                  <i className="fas fa-info-circleemployeeNew" />
                ) : (
                  <i className="fas fa-info-circle" />
                )
              ) : (
                <i className="fas fa-info-circle" />
              )}
            </Link>
          </li>
          <li>
            <Link to={`/home`}>
              <i className="fas fa-home" />
            </Link>
          </li>
          <li>
            <a href="/logout" className="logout" onClick={this.logOut}>
              <i className="fas fa-sign-out-alt" />
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default withRouter(EmployeeBottomNav);
