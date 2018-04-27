import React, { Component } from "react"
import { Link, withRouter } from "react-router-dom"

import './style.css'

class CustomerHome extends Component {

  render() {
      const user = 'Adam';
    return (
        <div className="welcome"> 
            <i className="far fa-user-circle"></i>
            <h3>Välkommen {user}</h3>
            <div>
                <button className="CustomerHomeButtons">
                <Link to={`/order/add`}>
                    <i className="fas fa-shopping-cart"></i>
                </Link>    
                </button>
                <button className="CustomerHomeButtons">
                <Link to={`/complaints`}>
                    <i className="fas fa-exclamation-triangle"></i>
                </Link>    
                </button>
            </div>
            <div>
                <button className="CustomerHomeButtons">
                <Link to={`/contact`}>
                    <i class="far fa-envelope"></i>
                </Link>    
                </button>
                <button className="CustomerHomeButtons">
                <Link to={`/history`}>
                    <i className="fas fa-history"></i>
                </Link>    
                </button>
            </div>
        </div>    
    )
  }

}

export default withRouter(CustomerHome)