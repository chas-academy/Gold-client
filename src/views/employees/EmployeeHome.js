import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Cookies from "universal-cookie";

import "./style.css";

class EmployeeHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: ''
    }

    this.logOut = this.logOut.bind(this);
  }

  logOut(event){
    const cookies = new Cookies();
    cookies.remove("token")
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
        ))

        this.setState({ userName: user.name })
    }

  }

  render() {

    const { userName } = this.state;

    return (
      <div>
            <a href="/logout" onClick={this.logOut}>
                Logga ut
            </a>
        <div className="CustomerHome__menu">
          <h3 className="CustomerHome__welcome">Välkommen {userName}!</h3>
          <div>
            <button className="CustomerHome__buttons">
              <Link to={`/employee/incoming`}>
                <i className="fas fa-inbox" />
                <p className="CustomerHome__buttonText"> Inkomna Jobb</p>
              </Link>
            </button>
            <button className="CustomerHome__buttons">
              <Link to={`/employee/internal`}>
                <i className="far fa-check-circle" />
                <p className="CustomerHome__buttonText">
                  Interna ärenden
                </p>
              </Link>
            </button>
          </div>
          <div>
            <button className="CustomerHome__buttons">
              <Link to={`employee/history`}>
                <i className="fas fa-history" />
                <p className="CustomerHome__buttonText">Ärendehistorik</p>
              </Link>
            </button>
            <button className="CustomerHome__buttons">
              <Link to={`employee/profile`}>
                <i className="fas fa-user-circle" />
                <p className="CustomerHome__buttonText"> Redigera profil</p>
              </Link>
            </button>
          </div>
        </div>
        <Link to={`/contact`}>
            <p className="CustomerHome__contact"></p>
        </Link>
      </div>
    );
  }
}

export default withRouter(EmployeeHome);
