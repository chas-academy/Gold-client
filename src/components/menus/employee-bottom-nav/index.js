import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";


class EmployeeBottomNav extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    localStorage.clear();
    this.props.history.push("/");
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
            <button className="logout" onClick={this.logout}>
              <i className="fas fa-sign-out-alt" />
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default withRouter(EmployeeBottomNav);