import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import "./style.css";

class CustomerBottomNav extends Component {
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
      <nav className="CustomerBottomNav__container">
        <ul className="bottomNavList">
          <li>
            <Link to={`/order/add`}>
                <i className="fas fa-shopping-cart"></i>
            </Link>
          </li>
          <li>
            <Link to={`/history`}>
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
              <i class="fas fa-sign-out-alt" />
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default withRouter(CustomerBottomNav);