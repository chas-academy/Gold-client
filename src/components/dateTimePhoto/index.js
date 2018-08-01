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
      photo: '',
      admin: this.props.admin
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
    const { time, admin } = this.state;
    
    return (
      <div className="date-time-photo__container">
      <div className="date-time-photo__picker">
         <label htmlFor="date">Välj Datum:</label> 
            <DatePicker
              name="date"
              selected={this.state.startDate}
              onChange={this.handleChange}
              dateFormat='Y-MM-DD'
              onBlur={this.setDate.bind(this)}
            />
      </div>    
        <hr />
        <div >  
        <label htmlFor="time">Välj önskad tid:</label> 
          <input
              className="time__input"
              type="time"
              name="time"
              placeholder=" HH:MM"
              value={time}
              onChange={this.setTime.bind(this)}
              onBlur={this.setTime.bind(this)}
            />
          </div>  
      <hr />
          {!admin ?
          <div>
            <AddPhotos setPhoto={this.setPhoto.bind(this)} />
          </div>  
            : ('')}
        </div>
    );
  }
}

export default DateTimePhoto;
