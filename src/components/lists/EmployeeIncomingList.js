import React, { Component } from "react";
// import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

import './style.css'

class IncomingJobsList extends Component {

  componentDidMount() {

  }

  render() {
    const jobId = 1;
    const jobId2 = 2;
    return (
      <div className="BasicList__container">
        <h4> Inkomna Jobb</h4>
        <p> Här samlas alla dina inkomna jobb. När du har anlänt till kunden, klicka på acceptera. </p>
        <hr />
        <ul className="BasicList__list">
          <li>
            <Link to={`/employee/orders/${jobId}`}>
              <div className="edit">
                <p>Kund: XXXXX</p>
                <p>datum: XXXX</p>
                <p className="IncomingJobAccept">Acceptera</p>
              </div>
            </Link>
          </li>
          <hr />
          <li>
            <Link to={`/employee/orders/${jobId2}`}>
              <div className="edit">
              <p>Kund: XXXXX</p>
              <p>datum: XXXX</p>
                <p className="IncomingJobAccept">Acceptera</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(IncomingJobsList);