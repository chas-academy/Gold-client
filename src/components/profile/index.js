import React, { Component } from "react";
// import { connect } from "react-redux";
import { UpdateUser } from '../../components'
import './style.css'

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
        <ul>
          <li>
            <UpdateUser />
          </li>
          <li>
            <button className="btn btn-danger" onClick={this.logout}>
                Logga ut
            </button>
          </li>  
        </ul>
      </div>
    );
  }
}
