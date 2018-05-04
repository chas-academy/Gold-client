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
        <h5> Inkomna Jobb</h5>
        <p> Här samlas alla dina inkomna jobb. Klicka på ärendet för 
            att få mer detaljer och bekräfta att du påbörjat jobbet när 
            du har anlänt till kunden med knappen "Påbörja jobb". </p>
        <hr />
        <ul className="BasicList__list">
          <li>
            <Link to={`/employee/orders/${jobId}`}>
              <div className="edit">
                <p>Kund: XXXXX</p>
                <p>datum: XXXX</p>
                <p className="IncomingJobAccept">Info</p>
              </div>
            </Link>
          </li>
          <hr />
          <li>
            <Link to={`/employee/orders/${jobId2}`}>
              <div className="edit">
              <p>Kund: XXXXX</p>
              <p>datum: XXXX</p>
                <p className="IncomingJobAccept">Info</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(IncomingJobsList);