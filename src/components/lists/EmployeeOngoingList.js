import React, { Component } from "react"
// import { connect } from "react-redux"
import { Link, withRouter } from "react-router-dom"

import './style.css'

class EmployeeOngoingList extends Component {
  constructor(props) {
      super(props);
  }

  componentDidMount() {
      
  }

  render() {

    return (
      <div className="BasicList__container">
        <h4> pågående jobb </h4>

      </div>
    );
  }
}

export default withRouter(EmployeeOngoingList);