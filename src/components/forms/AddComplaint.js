import React, { Component } from 'react';
// import { loginUser } from '../actions/auth';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';

import './style.css';

class AddComplaint extends Component {
  constructor (props) {
    super(props);

    this.state = { 
        submitted: '',
        orderId: '',
        date: '',
        description: '',
        employee: '',
        photo: '',
        errorMessage: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }  

  handleChange(event) {
    const { name, value } = event.target;
    this.setState ({ [name]: value })
  }

  handleSubmit(event) {
    event.preventDefault(); 
    this.setState({ submitted: true });

  }

    render() {
    const { submitted, orderId, date, description, employee, photo, errorMessage } = this.state;

    return (
    <div className="col-md-6 col-md-offset-3">
        <form name="form" className="UpdateUser-login" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label for="orderId">ÄrendeId</label>
            <input type='text' name='orderId' className="form-control" placeholder='Ärende id' value={orderId} onChange={this.handleChange}/>
            {submitted && !orderId &&
              <div className="help-block">Välj ärendenummer!</div>
              }
          </div>
          <div className="form-group">
          <label for="date">Datum</label>
            <input type='text' name='date' className="form-control" placeholder='Datum' value={date} onChange={this.handleChange}/>
            {submitted && !date &&
              <div className="help-block">Välj datum reklamationen ska åtgärdas</div>
              }
          </div>
          <div className="form-group">
          <label for="employee">Åtgärdas av:</label>
            <input type='text' name='employee' className="form-control" placeholder='Anställd' value={employee} onChange={this.handleChange}/>
            {submitted && !employee &&
              <div className="help-block">Välj en anställd</div>
              }
          </div>
          <div className="form-group">
          <label for="description">Beskrivning</label>
            <text type="text" name='description' className="form-control" placeholder='Beskrivning av ärende' value={description} onChange={this.handleChange}/>
            {submitted && !description &&
              <div className="help-block">Glöm inte att fylla i nytt lösenord</div>
            }
          </div>
          <div className="buttons">
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Skapa Reklamation
            </button>
              {errorMessage &&
              <div className="help-block">{errorMessage}</div>  
              }
              </div>
          </div>  
        <div className="form-group">
            <button className="btn btn-info"> 
            Lägg till Foto
            </button>
        </div>
        </form> 
        </div>    
    )
  }

}
  
export default AddComplaint;