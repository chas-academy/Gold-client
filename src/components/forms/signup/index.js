import React, { Component } from 'react';
// import { loginUser } from '../actions/auth';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';

import './style.css';

class SignUp extends Component {
  constructor (props) {
    super(props);

    this.state = {
        name: '',
        persOrgNumber: '',
        password: ''
        
     };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }  

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });  
  }

  handleSubmit(e) {
    e.preventDefault();

    // register user object to dispatched to register action
    const newUser = {
      // role
      name: this.state.name,
      persOrgNumber: this.state.persOrgNumber,
      password: this.state.password
    }
    
  }

    render() {
    const { submitted, name, password, errorMessage, persOrgNumber  } = this.state;

    return (
    <div className="col-md-6 col-md-offset-3">
        <form name="form" className="SignInForm-login" onSubmit={this.handleSubmit}>

            {/* Välj Roll */}
          <div class="form-group">
            <label for="exampleFormControlSelect1">Är du Kund eller Anställd?</label>
                <select class="form-control" id="exampleFormControlSelect1">
                    <option>Anställd</option>
                    <option>Kund</option>     
                </select>
          </div>

            {/* Namn */}
          <div className="form-group">
            <input type='text' name='name' className="form-control" placeholder='namn' value={name} onChange={this.handleChange}/>
            { !name &&
              <div className="help-block">Registrera med ditt namn</div>
              }  
          </div>

            {/* Pers/Org nummer  */}
          <div className="form-group">
            <input type='text' name='persOrgNumber' className="form-control" placeholder='pers/org-number' value={persOrgNumber} onChange={this.handleChange}/>
            { !persOrgNumber  &&
              <div className="help-block">Fyll i ditt organisationsnummer alternativt ditt personummer</div>
              } 
          </div>
            {/* Lösenord Password */}
          <div className="form-group">
            <input type='password' name='password' className="form-control" placeholder='lösenord' value={password} onChange={this.handleChange}/>
            {submitted && !password &&
              <div className="help-block">Your password is required</div>
            }
          </div>
            {/* Submit  */}
          <div className="form-group">
            <button className="btn btn-primary">
              Registrera
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
  
export default SignUp;
