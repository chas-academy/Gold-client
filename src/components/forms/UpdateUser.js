import React, { Component } from 'react';
// import { loginUser } from '../actions/auth';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';

import './style.css';

class UpdateUser extends Component {
  constructor (props) {
    super(props);

    this.state = { 
        submitted: '',
        name: '',
        email: '',
        adress: '',
        tel: '',
        number: '',
        password: '',
        errorMessage: '',
        userIsNotAdmin: this.props
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
    const { name, password, email, tel } = this.state;
    this.setState({ submitted: true });

  }

    render() {
    const { submitted, name, email, password, tel, number, adress, errorMessage, userIsNotAdmin } = this.state;

    return (
    <div className="col-md-6 col-md-offset-3">
        <form name="form" className="UpdateUser-login" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label for="name">Användarens Namn</label>
            <input type='text' name='name' className="form-control" placeholder='Användarens namn' value={name} onChange={this.handleChange}/>
            {submitted && !name &&
              <div className="help-block">Glöm inte fylla i namnet!</div>
              }
          </div>
          <div className="form-group">
          <label for="name">Personnummer/organisationsnummer</label>
            <input type='text' name='person/orgnr' className="form-control" placeholder='Person/organisationsnummer' value={number} onChange={this.handleChange}/>
            {submitted && !number &&
              <div className="help-block">Glöm inte fylla i personnummer/organisationsnummer!</div>
              }
          </div>
          <div className="form-group">
          <label for="name">Email</label>
            <input type='text' name='email' className="form-control" placeholder='Email' value={email} onChange={this.handleChange}/>
            {submitted && !email &&
              <div className="help-block">Glöm inte fylla i email!</div>
              }
          </div>
          <div className="form-group">
          <label for="name">Tel</label>
            <input type='text' name='tel' className="form-control" placeholder='Tel' value={tel} onChange={this.handleChange}/>
            {submitted && !tel &&
              <div className="help-block">Glöm inte fylla i telefonnummer!</div>
              }
          </div>
          <div className="form-group">
          <label for="name">Adress</label>
            <input type='text' name='adress' className="form-control" placeholder='Adress' value={adress} onChange={this.handleChange}/>
            {submitted && !adress &&
              <div className="help-block">Glöm inte fylla i adressen!</div>
              }
          </div>
          <div className="form-group">
          <label for="name">Lösenord</label>
            <input type='password' name='password' className="form-control" placeholder='Password' value={password} onChange={this.handleChange}/>
            {submitted && !password &&
              <div className="help-block">Glöm inte att fylla i nytt lösenord</div>
            }
          </div>
          <div className="buttons">
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Uppdatera Användare
            </button>
              {errorMessage &&
              <div className="help-block">{errorMessage}</div>  
              }
              </div>
          </div>  
        <div className="form-group">
          {userIsNotAdmin == true ?
            <button className="btn btn-danger">
              Radera Användare
            </button>
            : ('')}
        </div>
        </form> 
        </div>    
    )
  }

}
  
export default UpdateUser;
