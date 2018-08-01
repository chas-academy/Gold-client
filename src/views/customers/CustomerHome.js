import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Cookies from "universal-cookie";

import "./style.css";

class CustomerHome extends Component {
  constructor(props) {
    super(props);
    this.state = { userName: "" };
    this.logOut = this.logOut.bind(this);
  }

  logOut(event) {
    const cookies = new Cookies();
    cookies.remove("token");
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

      this.setState({ userName: user.name });
    }
  }

  render() {
    const { userName } = this.state;
    return (
        <div className="Customer-Employee-Home__menu ">
          <h1>Välkommen {userName}!</h1>
          <div>
            <button>
              <Link to={`/orders/add`}>
                <i className="fas fa-shopping-cart" />
                <p> Beställ tjänst</p>
              </Link>
            </button>
            <button>
              <Link to={`/complaints`}>
                <i className="fas fa-exclamation-triangle" />
                <p> Reklamera</p>
              </Link>
            </button>
          </div>
          <div>
            <button>
              <Link to={`/history`}>
                <i className="fas fa-history" />
                <p>
                  Historik
                </p>
              </Link>
            </button>
            <button>
              <Link to={`/profile`}>
                <i className="fas fa-user-circle" />
                <p> Redigera profil</p>
              </Link>
            </button>
          </div>
          <a href="/logout" onClick={this.logOut}>
            <h4>Logga ut</h4>
          </a> 
        </div>
    );
  }
}

export default withRouter(CustomerHome);
