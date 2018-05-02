import React, { Component } from "react";
// import { connect } from "react-redux";
import './style.css'
import { EmployeeConfirmJob } from '../buttons/EmployeeConfirmJob';
export default class EmployeeOrderDetails extends Component {
  constructor(props) {
      super(props);
  }

  componentDidMount() {
    console.log(this.props.id);
    //change buttons depending if job is been accepted or not
  }

  render() {
    
    const { id } = this.props;
    return (
      <div className="EmployeeOrderDetails">
            <p>order id: {id}</p>
            <p>orderdetails  details component</p>
            <ul>
              <li>Kontakt person</li>
              <li>Adress</li>
              <li>beskrivning</li>
            </ul>
            <button>Acceptera</button>

      </div>
    );
  }
}