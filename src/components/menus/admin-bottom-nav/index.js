import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import "./style.css";

class AdminBottomNav extends Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.history.push("/");
  }

  render() {

    return (      
      <div>
        <nav className="bottomNav">
          <ul>
            <li>
              <Link to={`/admin/services/incoming`}>
                  <i className="fas fa-map-marker" />
              </Link>
            </li>
            <li>
              <Link to={`/admin/orders/complaints`}>
                  <i className="fas fa-info-circle"></i>
              </Link>
            </li>
            <li>
              <Link to={`/home`}>
                  <i className="fas fa-home" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default withRouter(AdminBottomNav);
