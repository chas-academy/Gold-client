import React, { Component } from "react"
import { Link, withRouter } from "react-router-dom"

import './style.css'

class CustomerHome extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
      }

    logout() {
        localStorage.clear();
        this.props.history.push("/");
      }

  render() {
      const user = 'Adam';
    return (
        <div>
            <button className="CustomerHome__logout" onClick={this.logout}>
             Logga ut
            <i className="fas fa-sign-out-alt" />
            </button>
        <div className="CustomerHome__menu">
            <h3 className="CustomerHome__welcome">Välkommen {user}!</h3>
            <div>
                <button className="CustomerHome__buttons">
                <Link to={`/orders/add`}>
                    <i className="fas fa-shopping-cart"></i>
                    <p className="CustomerHome__buttonText"> Beställ tjänst</p>
                </Link>    
                </button>
                <button className="CustomerHome__buttons">
                <Link to={`/complaints`}>
                    <i className="fas fa-exclamation-triangle"></i>
                    <p className="CustomerHome__buttonText"> Reklamera</p>
                </Link>    
                </button>
            </div>
            <div>
                <button className="CustomerHome__buttons">
                <Link to={`/history`}>
                    <i className="fas fa-history"></i>
                    <p className="CustomerHome__buttonText"> Beställningshistorik</p>
                </Link>    
                </button>
                <button className="CustomerHome__buttons">
                <Link to={`/profile`}>
                    <i className="fas fa-user-circle"></i>
                <p className="CustomerHome__buttonText"> Redigera profil</p>
                </Link>    
                </button>
            </div>
        </div>    
                <Link to={`/contact`}>
                    <p className="CustomerHome__contact">Hittar du inte det du söker? Kontakta oss!</p>
                </Link>
                </div>
    )
  }

}

export default withRouter(CustomerHome)