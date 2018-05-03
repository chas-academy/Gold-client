import React, { Component } from "react";
// import { connect } from "react-redux";
import './style.css'
import { EmployeeConfirmJob, EmployeeCompleteJob } from '../../components';



export default class EmployeeOrderDetails extends Component {
  constructor(props) {
      super(props);

  }

  componentDidMount() {
    console.log(this.props.id);
    
    //change buttons depending if job is been accepted or not
  }

  render() {
    
    const { id, Ongoing } = this.props;

    const button = Ongoing ? 
    <EmployeeCompleteJob />
    : (
      <EmployeeConfirmJob />
    );
    return (
      <div className="EmployeeOrderDetails">
            <p>order id: {id}</p>
            <ul>
              <li><h2>Jobb</h2></li>
              <li>Tele nummer</li>
              <li>Foton?<img src="#"/></li>
              <li>Adress</li>
              <li>beskrivning</li>
              <li>Datum</li>
            </ul>
              {button}
      </div>
    );
  }
}