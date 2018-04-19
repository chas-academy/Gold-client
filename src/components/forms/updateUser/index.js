import React, { Component } from 'react';
// import { loginUser } from '../actions/auth';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';

import './style.css';

class UpdateUser extends Component {
  constructor (props) {
    super(props);

    this.state = { 
        submitted: false,
        name: this.props,
        email: this.props,
        adress: this.props,
        tel: this.props,
        number: this.props,
        password: this.props,
        errorMessage: ''
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
    const { submitted, name, email, password, tel, number, adress, errorMessage } = this.state;

    return (
    <div className="col-md-6 col-md-offset-3">
        <form name="form" className="UpdateUser-login" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type='text' name='name' className="form-control" placeholder='name' value={name} onChange={this.handleChange}/>
            {submitted && !name &&
              <div className="help-block">Glöm inte fylla i namnet!</div>
              }
          </div>
          <div className="form-group">
            <input type='text' name='person/orgnr' className="form-control" placeholder='person/orgnr' value={number} onChange={this.handleChange}/>
            {submitted && !number &&
              <div className="help-block">Glöm inte fylla i personnummer/organisationsnummer!</div>
              }
          </div>
          <div className="form-group">
            <input type='text' name='email' className="form-control" placeholder='email' value={email} onChange={this.handleChange}/>
            {submitted && !email &&
              <div className="help-block">Glöm inte fylla i email!</div>
              }
          </div>
          <div className="form-group">
            <input type='text' name='tel' className="form-control" placeholder='tel' value={tel} onChange={this.handleChange}/>
            {submitted && !tel &&
              <div className="help-block">Glöm inte fylla i telefonnummer!</div>
              }
          </div>
          <div className="form-group">
            <input type='text' name='adress' className="form-control" placeholder='adress' value={adress} onChange={this.handleChange}/>
            {submitted && !adress &&
              <div className="help-block">Glöm inte fylla i adressen!</div>
              }
          </div>
          <div className="form-group">
            <input type='password' name='password' className="form-control" placeholder='Password' value={password} onChange={this.handleChange}/>
            {submitted && !password &&
              <div className="help-block">Glöm inte att fylla i nytt lösenord</div>
            }
          </div>
          <div className="form-group">
            <button className="btn btn-primary">
              Uppdatera Användare
            </button>
              {errorMessage &&
              <div className="help-block">{errorMessage}</div>  
              }
          </div>  
        </form> 
      </div>
    )
  }

}
  
export default UpdateUser;
