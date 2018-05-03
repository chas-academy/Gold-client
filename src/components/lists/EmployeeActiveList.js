import React, { Component } from "react";
// import { connect } from "react-redux"
import { withRouter } from "react-router-dom";

import "./style.css";

class EmployeeActiveList extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {}

  render() {
    return (
      <div className="BasicList__container">
        <h4> pågående jobb </h4>
      </div>
    );
  }
}

export default withRouter(EmployeeActiveList);
