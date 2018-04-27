import React, { Component } from 'react'
// import { loginUser } from '../actions/auth'
// import { connect } from 'react-redux'
// import { withRouter, Link } from 'react-router-dom'

import './style.css';

class SignUp extends Component {
  constructor (props) {
    super(props);

    this.state = { 
        name: '',
        password: '',
        persOrgNumber: '',
        passwordError: null,
        persOrgNumberError: null,
    };



    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }  

  handleChange(e) {
    
    this.setState({ [e.target.name]: e.target.value });

      const isNumeric = /^[0-9]+$/;

      if(this.state.persOrgNumber.length >= 9
         && this.state.persOrgNumber.match(isNumeric) ) {
        
        this.setState({ persOrgNumberError: true });
      }
      else {

        this.setState({ persOrgNumberError: false });
      }

      if(this.state.password.length >= 7 ) { 

        this.setState({ passwordError: true });
      }
      else {
        
        this.setState({ passwordError: false });
      }

      
  }

       


  handleSubmit(e) {
    e.preventDefault();

    // register user object to dispatched to register action
    // const newUser = {
    //   name: this.state.name,
    //   persOrgNumber: this.state.persOrgNumber,
    //   password: this.state.password
    // }
    // dispatch goes here.....
    
  }

    render() {
    const { submitted, name, password, passwordError, persOrgNumber, persOrgNumberError  } = this.state;

    return (
        <form name="form" className="SignInForm-login" onSubmit={this.handleSubmit}>
        

          
            {/* Namn eller FöretagsNamn */}
          <div className="form-group">
            <label>Namn eller Företagsnamn</label>
            <input type='text' name='name' className="form-control form" placeholder='namn' value={name} onChange={this.handleChange} required/>
            { !name &&
              <div className="help-block">Registrera med ditt namn</div>
              }  
          </div>

            {/* Pers/Org nummer  */}
          <div className="form-group">
            <label>Person eller OrganisationsNummer</label>
            <input type='text' name='persOrgNumber' className="form-control form" placeholder='ÅÅMMDDXXXX' value={persOrgNumber} onChange={this.handleChange} required/>

            {/* error handling */}
            { !persOrgNumber  &&
              <div className="help-block">Fyll i ditt organisationsnummer alternativt ditt personummer</div>
              } 
            { !persOrgNumberError &&
              <div className="help-block error">org nummer eller pers nummer måste vara minst 10 siffror</div>
              } 
            { persOrgNumberError &&
              <div className="help-block sucess">org/pers nummer är tillräkligt lång</div>
              } 
          </div>

            {/* Lösenord Password */}
          <div className="form-group">
            <label>Lösenord</label>
            <input type='password' name='password' className="form-control form" placeholder='lösenord' value={password}  onChange={this.handleChange} required/> 

            {/* error handling */}
            { !passwordError  &&
              <div className="help-block error">Lösenord måste vara  minst 8 karaktärer</div>
              }
            { passwordError  &&
              <div className="help-block sucess">Lösenord är godkänt</div>
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
    )
  }
}
  
export default SignUp;
