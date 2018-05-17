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
    return (
      <nav className="bottomNav">
        <ul className="bottomNavList">
          <li>
            <Link to={`/employee/incoming`}>
                <i className="fas fa-inbox"></i>
            </Link>
          </li>
          <li>
            <Link to={`/employee/history`}>
            <i className="fas fa-history"></i>
            </Link>
          </li>
          <li>
            <Link to={`/home`}>
              <i className="fas fa-home" />
            </Link>
          </li>
          <li>
            <button className="logout" onClick={this.logOut}>
              <i className="fas fa-sign-out-alt" />
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default withRouter(EmployeeBottomNav);