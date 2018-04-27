import React, { Component } from "react"
import './style.css'

export default class CustomerHome extends Component {

  render() {
      const user = 'Adam';
    return (
        <div className="welcome"> 
            <i className="far fa-user-circle"></i>
            <h3>Välkommen {user}</h3>
            <div>
                <button className="CustomerHomeButtons">
                    <i className="fas fa-shopping-cart"></i>
                </button>
                <button className="CustomerHomeButtons">
                    <i className="fas fa-exclamation-triangle"></i>
                </button>
            </div>
            <div>
                <button className="CustomerHomeButtons">
                    <i class="far fa-envelope"></i>
                </button>
                <button className="CustomerHomeButtons">
                    <i class="fas fa-history"></i>
                </button>
            </div>
        </div>    
    )
  }

}