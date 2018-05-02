import React, { Component } from 'react';
// import { loginUser } from '../actions/auth';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';

import { DateTime, ImageUploader, MultipleSelect  } from '../../components'

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
        <form name="form" className="BasicForm" onSubmit={this.handleSubmit}>
          <h5>Reklamation</h5>

          <div className="form-group">
            <input type='text' name='orderId' className="form-control" placeholder='Ärende id' value={orderId} onChange={this.handleChange}/>
            {submitted && !orderId &&
              <div className="help-block">Välj ärendenummer!</div>
              }
          </div>
          <div className="form-group">
            <textarea type="text" rows="5" name='description' className="BasicForm__textArea" placeholder='Detaljerad beskrivning av reklamationen' value={description} onChange={this.handleChange}/>
            {submitted && !description &&
              <div className="help-block">Glöm inte bort att beskriva vad vi ska åtgärda</div>
            }
          </div>
          <label class="BasicForm__checkboxContainer">
              <input type="checkbox" />
              <span class="BasicForm__checkmark">
                <i class="fas fa-exclamation-circle"></i>
                Akut ärende (åtgärdas inom 4h)
              </span>
            </label>
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
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Skicka
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
