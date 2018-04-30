import React, { Component } from 'react';
// import { loginUser } from '../actions/auth';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';

import { DateTime, ImageUploader, AddPhotos, MultipleSelect, LocationSearchInput  } from '../../components'

import  './style.css';

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
        isAdmin: false
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
    const { isAdmin, submitted, contact, customerId, phone, adress, date, description, employee, photo, errorMessage } = this.state;

    return (
    <div className="col-md-6 col-md-offset-3">
        <form name="form" className="BasicForm" onSubmit={this.handleSubmit}>
          <input type='hidden' name='customerId' className="form-control" placeholder='Kundnummer' value={customerId} onChange={this.handleChange}/>
          <div className="form-group">
            <label>Kontaktperson:</label>
            <input type='text' name='contact' className="form-control" placeholder='Ansvarig för beställningen' value={contact} onChange={this.handleChange}/>
            {submitted && !contact &&
              <div className="help-block">Glöm inte fylla i kontakperson!</div>
              }
          </div>
          <div className="form-group">
          <label>Telefonnummer:</label>
            <input type='text' name='phone' className="form-control" placeholder='Kontakt till ansvarig' value={phone} onChange={this.handleChange}/>
            {submitted && !phone &&
              <div className="help-block">Glöm inte fylla i telefonnummer!</div>
              }
          </div>
          <div className="form-group">
          <label>Beskrivning av ärendet:</label>
            <textarea type="text" name='description' className="form-control" placeholder='Detaljerad beskrivning av ärendet' value={description} onChange={this.handleChange}/>
            {submitted && !description &&
              <div className="help-block">Glöm inte att beskriva ärendet!</div>
            }
          </div>
          <div className="form-group">
          <label>Vart ska vi komma?</label>
            <LocationSearchInput />
          </div>
          {isAdmin === true ? 
          <div className="form-group">
          <label>Åtgärdas av: </label>
          <MultipleSelect />
            {submitted && !employee &&
              <div className="help-block">Glöm inte att tilldela ärendet till rätt person!</div>
            }
          </div>
            : ('')}
          <DateTime />
          <div className="buttons">
          <AddPhotos />
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Skapa Ärende
            </button>
              {errorMessage &&
              <div className="help-block">{errorMessage}</div>  
              }
              </div>
          </div>  
        </form> 
        </div>    
    )
  }

}
  
export default AddOrder;
