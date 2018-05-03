import React, { Component } from "react";
// import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// import { Tabs, TabContent, TabLink } from 'react-tabs-redux';

import './style.css'

class EmployeeCompleteList extends Component {

  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {

  }
  render() {

    return (
      <div className="BasicList__container">
        <h4> Avslutade Jobb</h4>
        <p> Här samlas dina slutförda jobb.</p>
        <hr />
        <ul className="BasicList__list">
          <li>
              <div className="edit">
                <p>Kund: XXXXX</p>
                <p>datum: XXXX</p>
                <p className="IncomingJobAccept">Slutfört</p>
              </div>
          </li>
          <hr />
          <li>
              <div className="edit">
              <p>Kund: XXXXX</p>
              <p>datum: XXXX</p>
                <p className="IncomingJobAccept">Slutfört</p>
              </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(EmployeeCompleteList);