import React, { Component } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";

import "./style.css";
import "react-datepicker/dist/react-datepicker.css";
import { AddPhotos } from '../../components'

class DateTimePhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
      time: ''
    };
    
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date, event) {

    this.setState({
      startDate: date,
    });
  }

  render() {
    const { time } = this.state;
    return (
      <div className="DateTime__container">
          <div className="DateTime__buttons">
            <button className="AddPhotos__button">
              <i className="fas fa-calendar-alt" />
            </button>
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChange}
            />
          </div>

          <div className="DateTime__buttons">
            <button className="AddPhotos__button">
              <i className="fas fa-clock" />
            </button>   
            <input
              className="DateTime__input"
              type="text"
              name="time"
              placeholder="HH:MM"
              value={time}
              onChange={this.handleChange}
            />
          </div>
            <AddPhotos />
      </div>
    );
  }
}

export default DateTimePhoto;
