import React, { Component } from "react";
// import { connect } from "react-redux";
import "./style.css";
import { EmployeeConfirmJob, EmployeeCompleteJob } from "../../components";
import AddPhotos from "../buttons/AddPhotos";

export default class EmployeeOrderDetails extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //change buttons depending if job is been accepted or not
  }

  render() {
    const { id, Ongoing } = this.props;
    console.log(id);
    return (
  <div className="BasicList__container">    
      {Ongoing ? (
          <h4>Slutför jobb</h4>
      ) : (
        <h4>Påbörja jobb</h4>
      )}
    <div className="EmployeeOrderDetails">
          <ul className="BasicList__list orderDetails">
            <li>
              <h3>Kund</h3>
            </li>
            <li>Datum</li>
            <li>Adress</li>
            <li>beskrivning</li>
            <li>Foton</li>
            <li>Anställd som bekräftar</li>
          </ul>
          {Ongoing ? (
            <div>
              {/* <div className="orderDetails">
          <AddPhotos />
        </div>   */}
            <EmployeeCompleteJob />
            </div>
          ) : (
            <EmployeeConfirmJob />
          )}
        </div>
        </div>
    );
  }
}
