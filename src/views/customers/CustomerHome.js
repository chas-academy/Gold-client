import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Cookies from "universal-cookie";

import "./style.css";

class CustomerHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: ""
    };

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
      <div>
        <div className="CustomerHome__menu">
          <h3 className="CustomerHome__welcome">Välkommen {userName}!</h3>
          <div>
            <button className="CustomerHome__buttons">
              <Link to={`/orders/add`}>
                <i className="fas fa-shopping-cart" />
                <p className="CustomerHome__buttonText"> Beställ tjänst</p>
              </Link>
            </button>
            <button className="CustomerHome__buttons">
              <Link to={`/complaints`}>
                <i className="fas fa-exclamation-triangle" />
                <p className="CustomerHome__buttonText"> Reklamera</p>
              </Link>
            </button>
          </div>
          <div>
            <button className="CustomerHome__buttons">
              <Link to={`/history`}>
                <i className="fas fa-history" />
                <p className="CustomerHome__buttonText">
                  {" "}
                  Beställningshistorik
                </p>
              </Link>
            </button>
            <button className="CustomerHome__buttons">
              <Link to={`/profile`}>
                <i className="fas fa-user-circle" />
                <p className="CustomerHome__buttonText"> Redigera profil</p>
              </Link>
            </button>
          </div>
        </div>
          <div className="CustomerHome__contact">
        <Link to={`/contact`}>
            Hittar du inte det du söker? Kontakta oss!
        </Link>
          </div>
      </div>
    );
  }
}

export default withRouter(CustomerHome);
