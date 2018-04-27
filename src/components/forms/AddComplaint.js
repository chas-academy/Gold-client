import React, { Component } from 'react';
// import { loginUser } from '../actions/auth';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';

import { DateTime, ImageUploader, AddPhotos, MultipleSelect  } from '../../components'

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
    const { isAdmin, submitted, orderId, date, description, employee, photo, errorMessage } = this.state;

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
              <div className="help-block">Lägg till beskrivning av ärendet</div>
            }
          </div>
          {isAdmin === true? 
          <div className="form-group">
          <label for="employee">Åtgärdas av: </label>
          <MultipleSelect />
            {submitted && !employee &&
              <div className="help-block">Glöm inte att tilldela ärendet till rätt person</div>
            }
          </div>
          : ('')}
            <DateTime />
          <div className="buttons">
          <AddPhotos />
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Skapa Reklamation
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
  
export default AddComplaint;
