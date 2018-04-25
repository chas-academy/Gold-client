import React, { Component } from 'react';
// import { loginUser } from '../actions/auth';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';

import './style.css';

class AddOrder extends Component {
  constructor (props) {
    super(props);

    this.state = { 
        submitted: '',
        contact: '',
        customerId: '',
        phone: '',
        adress: '',
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
    const { submitted, contact, customerId, phone, adress, date, description, employee, photo, errorMessage } = this.state;

    return (
    <div className="col-md-6 col-md-offset-3">
        <form name="form" className="UpdateUser-login" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label for="contact">Kontaktperson</label>
            <input type='text' name='contact' className="form-control" placeholder='Kontakperson' value={contact} onChange={this.handleChange}/>
            {submitted && !contact &&
              <div className="help-block">Glöm inte fylla i kontakperson!</div>
              }
          </div>
          <div className="form-group">
          <label for="customerId">Kundnummer</label>
            <input type='text' name='customerId' className="form-control" placeholder='Kundnummer' value={customerId} onChange={this.handleChange}/>
            {submitted && !customerId &&
              <div className="help-block">Glöm inte fylla i kundnummer!</div>
              }
          </div>
          <div className="form-group">
          <label for="Adress">Adress</label>
            <input type='text' name='Adress' className="form-control" placeholder='Adress' value={adress} onChange={this.handleChange}/>
            {submitted && !adress &&
              <div className="help-block">Glöm inte fylla i adressen!</div>
              }
          </div>
          <div className="form-group">
          <label for="phone">Tel</label>
            <input type='text' name='phone' className="form-control" placeholder='Tel' value={phone} onChange={this.handleChange}/>
            {submitted && !phone &&
              <div className="help-block">Glöm inte fylla i telefonnummer!</div>
              }
          </div>
          <div className="form-group">
          <label for="date">Datum</label>
            <input type='text' name='date' className="form-control" placeholder='Datum' value={date} onChange={this.handleChange}/>
            {submitted && !adress &&
              <div className="help-block">Glöm inte välja ett datum!</div>
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
              Skapa Ärende
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
  
export default AddOrder;