import React, { Component } from 'react';
// import { loginUser } from '../actions/auth';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';

import './style.css';

class SignUp extends Component {
  constructor (props) {
    super(props);

    this.state = { };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }  

  handleChange(e) {
  
  }

  handleSubmit(event) {
    event.preventDefault();
    
  }

    render() {
    const { submitted, name, password, errorMessage, persOrgNummer  } = this.state;

    return (
    <div className="col-md-6 col-md-offset-3">
        <form name="form" className="SignInForm-login" onSubmit={this.handleSubmit}>
        
            {/* Namn */}
          <div className="form-group">
            <input type='text' name='namn' className="form-control" placeholder='namn' value={name} onChange={this.handleChange}/>
            { !name &&
              <div className="help-block">Register in with your name</div>
              }  
          </div>

            {/* Pers/Org nummer  */}
          <div className="form-group">
            <input type='pers/org-number' name='pers/org-number' className="form-control" placeholder='pers/org-number' value={persOrgNummer} onChange={this.handleChange}/>
            {submitted && !password &&
              <div className="help-block">Your password is required</div>
            }
          </div>
            {/* Lösenord Password */}
          <div className="form-group">
            <input type='password' name='lösenord' className="form-control" placeholder='lösenord' value={password} onChange={this.handleChange}/>
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
