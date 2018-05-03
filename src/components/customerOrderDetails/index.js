import React, { Component } from "react";
// import { connect } from "react-redux";

export default class CustomerOrderDetails extends Component {
  constructor(props) {
      super(props);

  }

  componentDidMount() {    
  }

  render() {
    const { id } = this.props;

    return (
      <div className="EmployeeOrderDetails">
            <ul className="BasicList__list orderDetails">
              <li>Datum</li>
              <li>Adress</li>
              <li>beskrivning</li>
              <li>Foton</li>
            </ul>
      </div>
    );
  }
}