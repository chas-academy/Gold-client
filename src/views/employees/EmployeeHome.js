import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import "./style.css";
import img from "../../assets/img/Slice1.png";

class EmployeeHome extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    localStorage.clear();
    this.props.history.push("/");
  }

  render() {
    const user = "Adam";
    return (
      <div>
        <img src={img} className="CustomerHome__logo" height={70} alt="logotype" />
        <button className="CustomerHome__logout" onClick={this.logout}>
          Logga ut
          <i className="fas fa-sign-out-alt" />
        </button>
        <div className="CustomerHome__menu">
          <h3 className="CustomerHome__welcome">Välkommen {user}!</h3>
          <div>
            <button className="CustomerHome__buttons">
              <Link to={`/employee/incoming`}>
                <i className="fas fa-inbox" />
                <p className="CustomerHome__buttonText"> Inkomna Jobb</p>
              </Link>
            </button>
            <button className="CustomerHome__buttons">
              <Link to={`/employee/active`}>
                <i className="far fa-check-circle" />
                <p className="CustomerHome__buttonText">
                  Slutför jobb
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
              <Link to={`/profile`}>
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
