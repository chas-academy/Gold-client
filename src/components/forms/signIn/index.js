import React, { Component } from 'react';
// import { loginUser } from '../actions/auth';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';

import './style.css';

class SignIn extends Component {
  constructor (props) {
    super(props);

    this.state = { };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }  

  handleChange(event) {
    const { name, value } = event.target;
    this.setState ({ [name]: value })
  }

  handleSubmit(event) {
    event.preventDefault();
    
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
    const { submitted, username, password, errorMessage } = this.state;

    return (
    <div className="col-md-6 col-md-offset-3">
        <form name="form" className="SignInForm-login" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type='text' name='username' className="form-control" placeholder='Username' value={username} onChange={this.handleChange}/>
            {submitted && !username &&
              <div className="help-block">Log in with your username</div>
              }
          </div>
          <div className="form-group">
            <input type='password' name='password' className="form-control" placeholder='Password' value={password} onChange={this.handleChange}/>
            {submitted && !password &&
              <div className="help-block">Your password is required</div>
            }
          </div>
          <div className="form-group">
            <button className="btn btn-primary">
              Log In
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
  
export default SignIn;
