import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Cookies from 'universal-cookie';


class EmployeeBottomNav extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
  }

  logOut(event){
    const cookies = new Cookies();
    cookies.remove("token")
  }

  render() {

    const { newOrders, newComplaints, newInternal } = this.props;
    return (
      <nav className="bottomNav">
        <ul className="bottomNavList">
          <li>
            <Link to={`/employee/incoming`}>
            {newOrders || newComplaints !== null ? 
                <i className="fas fa-compass employeeNew" />
                : 
                <i className="fas fa-compass" />}
            </Link>
          </li>
          <li>
          <Link to={`/employee/internal`}>
            {newInternal !== null ?
              <i className="far fa-check-circle employeeNew" />
              : 
              <i className="far fa-check-circle" />}
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