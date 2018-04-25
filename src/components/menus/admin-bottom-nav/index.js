import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import "./style.css";

class AdminBottomNav extends Component {
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
            <Link to={`/admin/orders/incoming`}>
                <i class="fas fa-inbox"></i>
            </Link>
          </li>
          <li>
            <Link to={`/admin/orders/complaints`}>
              <i className="far fa-frown" />
            </Link>
          </li>
          <li>
            <Link to={`/home`}>
              <i className="fas fa-home" />
            </Link>
          </li>
          <li>
            <button className="logout" onClick={this.logout}>
              <i class="fas fa-sign-out-alt" />
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default withRouter(AdminBottomNav);
