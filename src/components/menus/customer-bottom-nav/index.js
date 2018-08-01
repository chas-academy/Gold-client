import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Cookies from 'universal-cookie';

class CustomerBottomNav extends Component {
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
      <nav className="bottomNav customer">
        <ul className="bottomNavList">
          <li>
            <Link to={`/orders/add`}>
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
            <a href="/logout" className="logout" onClick={this.logOut}>
              <i className="fas fa-sign-out-alt" />
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default withRouter(CustomerBottomNav);