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
      pers_org_num: '',
      password: '',
      passwordError: null,
      numberError: null,
      isLoading: false,
      isAuthenticated: false
      // errorMessage: '',
     };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
}  

componentDidMount() {
  // console.log(token)
}

handleChange(event) {
  const { name, value } = event.target;
  this.setState({ [name]: value });
  
  const isNumeric = /^[0-9]+$/;

  if (this.state.pers_org_num.match(isNumeric)) {
    this.setState({ numberError: false });
  } else {
    this.setState({ numberError: true });
  }

  if (this.state.password.length >= 7) {
    this.setState({ passwordError: false });
  } else {
    this.setState({ passwordError: true });
  }

}

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ submitted: true });

    const { pers_org_num, password } = this.state; 

    const user = {
      pers_org_num: this.state.pers_org_num,
      password: this.state.password
    }

    if (pers_org_num && password) {
      this.props.loginUser({ user })
      .then((res) => this.props.history.push('/home'),
      (err) => this.setState({errorMessage: 'Could not match username with password', isLoading: false }))
    }

  }

    render() {
      const {
        pers_org_num,
        submitted,
        numberError,
        password,
        passwordError,
        errorMessage,
      } = this.state;

    return (
      <div className="col-md-6 col-md-offset-3">
          <form name="form" className="BasicForm" onSubmit={this.handleSubmit}> 

            <div className="form-group">
            <label className="BasicForm__label"> Person/organisationsnummer </label>
            <div className="BasicForm__check">
              <input
                type="text"
                name="pers_org_num"
                className="form-control"
                placeholder="YYMMDDXXXX / XXXXXXXXXX"
                value={pers_org_num}
                onChange={this.handleChange}
              />
              {pers_org_num &&
                !numberError && <i className="fas fa-check BasicForm__check" />}
            </div>
            {submitted &&
              !pers_org_num && (
                <div className="help-block">
                  Glöm inte fylla i Person/organisationsnummer!
                </div>
              )}
            {pers_org_num &&
              numberError && (
                <div className="help-block">Oopa! fick du med en bokstav?</div>
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
                value={password}
                onChange={this.handleChange}
              />
              {password &&  (
                  <i className="fas fa-check BasicForm__check" />
                )}
            </div>
              {password && passwordError  &&
                <div className="help-block">Lösenordet måste vara minst 8 tecken långt</div>
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
