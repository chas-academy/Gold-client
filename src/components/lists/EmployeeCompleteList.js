import React, { Component } from "react";
// import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { Tabs, TabContent, TabLink } from 'react-tabs-redux';

import './style.css'

class EmployeeCompleteList extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }
  render() {

    return (
      <div className="users">
        <h4> Avslutade jobb </h4>

      </div>
    );
  }
}

export default withRouter(EmployeeCompleteList);