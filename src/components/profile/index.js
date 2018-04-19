import React, { Component } from "react";
// import { connect } from "react-redux";

export default class UserProfile extends Component {

    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
      }

    logout() {
        localStorage.clear();
        this.props.history.push("/");
      }   

  render() {
    return (
      <div>
        <h1> Min profil </h1>
        <ul>
          <li>
            <p>Kunna redigera</p>
          </li>
          <li>
            <button onClick={this.logout}>
                Logga ut
            </button>
          </li>  
        </ul>
      </div>
    );
  }
}
