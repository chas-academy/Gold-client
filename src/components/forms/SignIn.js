import React, { Component } from 'react';
import { loginUser } from '../../redux/actions/Auth';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './style.css';


const mapDispatchToProps = dispatch => {
  return { loginUser: user => dispatch(loginUser(user)) };
};


class SignIn extends Component {
  constructor (props) {
    super(props);

    this.state = {
      email: '',      
      password: '',
      passwordError: null,
      isLoading: false,
      isAuthenticated: false
     };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
}  


handleChange(event) {
  const { name, value } = event.target;
  this.setState({ [name]: value });
  
  if (this.state.password.length >= 6) {
    this.setState({ passwordError: false });
  } else {
    this.setState({ passwordError: true });
  }

}

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ submitted: true });

    const { email, password } = this.state; 

    const user = {
      email: this.state.email,
      password: this.state.password
    }

    if (email && password) {
      this.props.loginUser({ user })
      .then((res) => {
        if (!res) {
          this.props.history.push('/home')
        } else {
          this.setState({errorMessage: res, isLoading: false })
        }
      })
    }

  }

    render() {
      const {
        email,
        submitted,
        password,
        passwordError,
        errorMessage,
      } = this.state;

    return (
      <div className="col-md-6 col-md-offset-3">
          <form name="form" className="loginForm" onSubmit={this.handleSubmit}> 

            <div className="form-group">
            <label className="BasicForm__label"> Email</label>
            <div className="BasicForm__check">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="example@email.com"
                value={email}
                onChange={this.handleChange}
              />
            </div>
            {submitted &&
              !email && (
                <div className="help-block">
                  Glöm inte fylla i din email!
                </div>
              )}
          </div>

          <div className="form-group">
          <label className="BasicForm__label"> Lösenord </label>
            <div className="BasicForm__check">
              <input
                type="password"
                name="password"
                className="form-control"
				placeholder="Lösenord"
				minLength='6'
                value={password}
                onChange={this.handleChange}
              />
              {password &&  (
                  <i className="fas fa-check BasicForm__check" />
                )}
            </div>
              {password && passwordError  &&
                <div className="help-block">Lösenordet måste vara minst 6 tecken långt</div>
                }
          </div>  
              <div className="form-group">
              <button className="btn btn-primary">
                Logga in
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
  
export default withRouter(connect(null, mapDispatchToProps)(SignIn));
