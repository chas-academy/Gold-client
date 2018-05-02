import React, { Component } from "react";
// import { connect } from "react-redux";
import { UpdateUser } from '../../components'
import './style.css'

export default class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = { 
       };
  }

  render() {
    return (
      <div>
            <UpdateUser />
      </div>
    );
  }
}
