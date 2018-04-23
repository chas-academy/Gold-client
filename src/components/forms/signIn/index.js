import React, { Component } from 'react';
// import { loginUser } from '../actions/auth';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';

import './style.css';

class SignIn extends Component {
  constructor (props) {
    super(props);

    this.state = {
      persOrgNumber: '',
      password: '',
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

      if(this.state.persOrgNumber.length >= 9 ) {
        console.log("good pers/org");
        this.setState({ persOrgNumberError: true });
        
      }
      else {
        console.log("bad pers/org");
        this.setState({ persOrgNumberError: false });
      }
  }

  handleSubmit(e) {
    e.preventDefault();
    
    const { username, password } = this.state;
    this.setState({ submitted: true });

    if (username && password) {
      this.props.loginUser({ username, password }).then(
        (res) => this.props.history.push('/home'),
        (err) => this.setState({ errorMessage: 'Could not match username with password' })
      );
    }
  }

    render() {
    const { submitted, name, persOrgNumber, persOrgNumberError, password, errorMessage, passwordError } = this.state;

    return (
      <div className="col-md-6 col-md-offset-3">
          <form name="form" className="SignInForm-login" onSubmit={this.handleSubmit}>
  
              {/* Pers/Org nummer  */}
            <div className="form-group">
              <label>Person eller OrganisationsNummer</label>
              <input type='text' name='persOrgNumber' className="form-control" placeholder='ÅÅMMDD-XXXX' value={persOrgNumber} onChange={this.handleChange} required/>
  
              {/* error handling */}
              { !persOrgNumber  &&
                <div className="help-block">Fyll i ditt organisationsnummer alternativt ditt personummer</div>
                } 
              { !persOrgNumberError &&
                <div className="help-block error">org nummer eller pers nummer måste vara 10 siffor och en - måste ingås</div>
                } 
              { persOrgNumberError &&
                <div className="help-block sucess">org/pers nummer är tillräkligt lång</div>
                } 
            </div>
  
              {/* Lösenord Password */}
            <div className="form-group">
              <label>Lösenord</label>
              <input type='password' name='password' className="form-control" placeholder='lösenord' value={password}  onChange={this.handleChange} required/> 
  
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
                Logga in
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
  
export default SignIn;
