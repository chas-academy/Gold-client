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
        password: '',
        // nameError: '',
        // persOrgNumberError: '',
         passwordError: null,
         persOrgNumberError: null,
        
     };



    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }  

  handleChange(e) {
    
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);


      if(this.state.password.length >= 7 ) {
        console.log("good");
        this.setState({ passwordError: true });
      }
      else {
        console.log("password needs to be minimum 8 characters");
        this.setState({ passwordError: false });
      }

      if(this.state.persOrgNumber.length <= 9 
        && this.state.persOrgNumber.length) {
        console.log("bad pers/org");
        this.setState({ perOrgNumberError: true });
      }
      else {
        console.log("good pers/org");
        this.setState({ perOrgNumberError: false });
      }

    }

       


  handleSubmit(e) {
    e.preventDefault();

    // register user object to dispatched to register action
    const newUser = {
      name: this.state.name,
      persOrgNumber: this.state.persOrgNumber,
      password: this.state.password
    }
    
  }

    render() {
    const { submitted, name, password, passwordError, persOrgNumber, persOrgNumberError  } = this.state;

    return (
    <div className="col-md-6 col-md-offset-3">
        <form name="form" className="SignInForm-login" onSubmit={this.handleSubmit}>


            {/* Namn eller FöretagsNamn */}
          <div className="form-group">
            <label>Namn eller Företagsnamn</label>
            <input type='text' name='name' className="form-control" placeholder='namn' value={name} onChange={this.handleChange} required/>
            { !name &&
              <div className="help-block">Registrera med ditt namn</div>
              }  
          </div>

            {/* Pers/Org nummer  */}
          <div className="form-group">
            <label>Person eller OrganisationsNummer</label>
            <input type='text' name='persOrgNumber' className="form-control" placeholder='ÅÅMMDD-XXXX' value={persOrgNumber} onChange={this.handleChange} required/>
            { !persOrgNumber  &&
              <div className="help-block">Fyll i ditt organisationsnummer alternativt ditt personummer</div>
              
              } 
          </div>

            {/* Lösenord Password */}
          <div className="form-group">
            <label>Lösenord</label>
            <input type='password' name='password' className="form-control" placeholder='lösenord' value={password}  onChange={this.handleChange} required/> 
            { !passwordError  &&
              <div className="help-block">Lösenord måste vara  minst 8 karaktärer</div>
              }
            { passwordError  &&
              <div className="help-block">:)</div>
              } 
          </div>
          

            {/* Submit  */}
          <div className="form-group">
            <button className="btn btn-primary">
              Registrera
            </button>
              {/* {errorMessage &&
              <div className="help-block">{errorMessage}</div>  
              } */}
          </div>  
        </form> 
      </div>
    )
  }

}
  
export default SignUp;
