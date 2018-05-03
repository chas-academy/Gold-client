import React, { Component } from "react";
// import { connect } from "react-redux"
import { withRouter } from "react-router-dom";
import { EmployeeOrderDetails } from '../../components'

import "./style.css";

class EmployeeActiveList extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {}

  render() {
    return (
      <div className="BasicList__container">
        <h4> Slutför Jobb</h4>
        <p> När du klickar på slutför jobb så skickas 
          en bekräftelse till kunden med tidpunkt och foton. </p>
        <hr />
        <ul className="BasicList__list">
          <li>
            <EmployeeOrderDetails Ongoing={true}/>
          </li>
        </ul>  
      </div>    
    );
  }
}

export default withRouter(EmployeeActiveList);
