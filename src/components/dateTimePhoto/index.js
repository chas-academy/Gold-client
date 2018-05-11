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
      date: '',
      time: '',
      photo: ''
    };
    
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({ startDate: date, date: date.format('Y-MM-DD') });
  }

  setDate() {
    this.setState({ date: this.state.startDate.format('Y-MM-DD') });
    this.props.getDate(this.state.date)
  }

  setTime(time) {
    this.setState({ time: time.target.value })
    this.props.getTime(this.state.time)
  }

  setPhoto(photo) {
    this.props.getPhoto(photo)
  }

  render() {
    const { time } = this.state;
    return (
      <div className="DateTime__container">
          <div className="DateTime__buttons">
            <button type="button" className="AddPhotos__button">
              <i className="fas fa-calendar-alt" />
            </button>
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChange}
              dateFormat='Y-MM-DD'
              onBlur={this.setDate.bind(this)}
            />
          </div>

          <div className="DateTime__buttons">
            <button type="button" className="AddPhotos__button">
              <i className="fas fa-clock" />
            </button>   
            <input
              className="DateTime__input"
              type="time"
              name="time"
              placeholder="HH:MM"
              value={time}
              onChange={this.setTime.bind(this)}
              onBlur={this.setTime.bind(this)}
            />
          </div>
            <AddPhotos
            setPhoto={this.setPhoto.bind(this)}
            />
      </div>
    );
  }
}

export default DateTimePhoto;