import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'

import './style.css'
import 'react-datepicker/dist/react-datepicker.css'


class DateTime extends Component {

  constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(date) {
    this.setState({
      startDate: date,
      time: '',
      submitted: ''
    });
  }
 
  render() {
    const { time, submitted } = this.state; 
    return (
        <div className="DateTime__container">
          <div className="DateTime__calendar">
            <p> Välj önskat datum: </p>          
              <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChange}
              />
            <p>Tidpunkt:</p>  
            <input type='text' className="form-control time" name='time' placeholder='HH:MM' value={time} onChange={this.handleChange}/>
          </div>
            {submitted && !time &&
              <div className="help-block">Välj datum reklamationen ska åtgärdas</div>
              }
        </div>  
    )
  }
}

export default DateTime;