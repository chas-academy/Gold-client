import React, { Component } from "react"
import { Link, withRouter } from "react-router-dom"
import { Logo } from '../../components'

import './style.css'

class CustomerHome extends Component {

  render() {
      const user = 'Adam';
    return (
        <div className="CustomerHome__menu">
            <Link to={`/profile`}>
                <i className="far fa-user-circle CustomerHome__userIcon"></i>
            </Link>
            <h3 className="CustomerHome__welcome">Välkommen {user}</h3>
            <div>
                <button className="CustomerHome__buttons">
                <Link to={`/order/add`}>
                    <i className="fas fa-shopping-cart"></i>
                    <p className="CustomerHome__buttonText"> Beställ tjänst</p>
                </Link>    
                </button>
                <button className="CustomerHome__buttons">
                <Link to={`/complaints`}>
                    <i className="fas fa-exclamation-triangle"></i>
                    <p className="CustomerHome__buttonText"> Skapa reklamation</p>
                </Link>    
                </button>
            </div>
            <div>
                <button className="CustomerHome__buttons">
                <Link to={`/contact`}>
                    <i class="far fa-envelope"></i>
                    <p className="CustomerHome__buttonText"> Kontakta oss</p>
                </Link>    
                </button>
                <button className="CustomerHome__buttons">
                <Link to={`/history`}>
                    <i className="fas fa-history"></i>
                    <p className="CustomerHome__buttonText"> Beställningshistorik</p>
                </Link>    
                </button>
            </div>
            <Logo />
        </div>    
    )
  }

}

export default withRouter(CustomerHome)