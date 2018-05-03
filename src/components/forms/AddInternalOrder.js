import React, { Component } from 'react';
// import { loginUser } from '../actions/auth';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';

import { DateTime, ImageUploader, AddPhotos, MultipleSelect, LocationSearchInput  } from '../../components'
import './style.css';

class AddInternalOrder extends Component {
  constructor (props) {
    super(props);

    this.state = { 
        submitted: '',
        title: '',
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
    const { submitted, date, title, description, employee, photo, errorMessage } = this.state;

    return (
    <div className="col-md-6 col-md-offset-3">
        <form name="form" className="BasicForm" onSubmit={this.handleSubmit}>
            <h5>Skapa Internt ärende</h5>
          <div className="form-group">
            <div className="BasicForm__check">
              <textarea
                rows="5"
                type="text"
                className="BasicForm__textArea"
                name="description"
                placeholder="Beskriv ditt ärende"
                value={description}
                onChange={this.handleChange}
              />
              {description &&
                <i className="fas fa-check BasicForm__check" />}
              </div>
          </div>
          <div className="form-group">
            <LocationSearchInput />  
            {submitted && !description &&
              <div className="help-block">Fyll i adressen</div>
            }
          </div>
          <div className="form-group">
          <label>Åtgärdas av: </label>
          <MultipleSelect />
            {submitted && !employee &&
              <div className="help-block">Glöm inte att tilldela ärendet till rätt person</div>
            }
          </div>
          <label class="BasicForm__checkboxContainer">
              <input type="checkbox" />
              <span class="BasicForm__checkmark">
                <i class="fas fa-exclamation-circle"></i>
                Akut ärende (åtgärdas inom 4h)
              </span>
            </label>
          <DateTime />
          <div className="buttons">
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Skapa internt ärende
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
  
export default AddInternalOrder;
