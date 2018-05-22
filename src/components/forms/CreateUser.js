import React, { Component } from 'react';
import { registerUser } from '../../redux/actions/Auth';
import { connect } from 'react-redux';

import './style.css';


const mapDispatchToProps = dispatch => {
  return { registerUser: regUser => dispatch(registerUser(regUser)) };
};


class CreateUser extends Component {
  constructor (props) {
    super(props);


    this.state = {
      email: "",
      errorMessage: "",

      name: "",

      password: "",
      passwordError: "",
      tel: "",
      telError: "",
      success: false,
      submitted: "",
      ValidatePassword: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSelectChange(event) {
    this.setState({
      customer_type: event.target.value
    })
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });

    const isNumeric = /^[0-9]+$/;

    if (this.state.tel.match(isNumeric)) {
      this.setState({ telError: false });
    } else {
      this.setState({ telError: true });
    }

    if (this.state.password.length >= 6) {
      this.setState({ passwordError: false });
    } else {
      this.setState({ passwordError: true });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ submitted: true });

    const regUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      passwordVal: this.state.ValidatePassword,
      type: this.state.customer_type,
    }

    var errorMessage = ''
    if (!this.state.numberError && !this.state.passwordError && !this.state.telError) {
      if ( regUser ) {
        this.props.registerUser({ regUser })
        .then((res) => {
          if (res) {
            this.setState({ success: true })
            // send email?
          } else {
            res.errors.forEach(error => {
              errorMessage = error.message
              if (error.message === "pers_org_num must be unique") {
                errorMessage = "Person/Organisationsnummer är redan registrerat"
              }
            });
            this.setState({ errorMessage: errorMessage, submitted: false })
          }
        })
      }
    }
  }
  
  render() {
    const {
      customer_type,
      email,
      errorMessage,
      submitted,
      name,
      password,
      passwordError,
      tel,
      telError,
      ValidatePassword,
    } = this.state;

    return (
      <div className="col-md-6 col-md-offset-3">
        <form name="form" className="BasicForm" onSubmit={this.handleSubmit}>
        <h5> Skapa Användare </h5>
          <div className="form-group">
            <div className="BasicForm__check">
              <input
                type="text"
                name="name"
                className="form-control obl"
                placeholder="Namn *"
                value={name}
                onChange={this.handleChange}
              />
              {name && <i className="fas fa-check BasicForm__check" />}
            </div>
            {submitted &&
              !name && (
                <div className="help-block">Glöm inte fylla i namnet!</div>
              )}
          </div>
          <div className="form-group">
            <div className="BasicForm__check">
              <select className="BasicForm__select" onChange={this.handleSelectChange.bind(this)}>
                <option selected disabled>Välj typ av användare * </option>
                <option value="admin">Admin</option>
                <option value="employee">Anställd</option>
              </select>  
          {customer_type && <i className="fas fa-check BasicForm__check" />}
            </div>
          </div>
          <div className="form-group">
            <div className="BasicForm__check">
              <input
                type="text"
                name="email"
                className="form-control"
                placeholder="Email *"
                value={email}
                onChange={this.handleChange}
              />
              {email && <i className="fas fa-check BasicForm__check" />}
            </div>
            {submitted &&
              !email && (
                <div className="help-block">Glöm inte fylla i email!</div>
              )}
          </div>
          <div className="form-group">
            <div className="BasicForm__check">
              <input
                type="text"
                name="tel"
                className="form-control"
                placeholder="Telefonnummer"
                value={tel}
                onChange={this.handleChange}
              />
              {tel &&
                !telError && <i className="fas fa-check BasicForm__check" />}
            </div>
            {submitted &&
              !tel && (
                <div className="help-block">
                  Glöm inte fylla i telefonnummer!
                </div>
              )}
            {tel &&
              telError && (
                <div className="help-block">Oopa! fick du med en bokstav?</div>
              )}
          </div>
          <div className="form-group">
            <div className="BasicForm__check">
              <input
                type="password"
                name="password"
                className="form-control obl"
                placeholder="Lösenord *"
                value={password}
                minLength='6'
                onChange={this.handleChange}
              />
              {password && passwordError &&
                password !== ValidatePassword &&  (
                  <i className="fas fa-check BasicForm__passwordNotOk" />
                )}
              {password && password !== ValidatePassword && !passwordError && (
                  <i className="fas fa-check BasicForm__check" />
                )}
                
              {password &&
                password === ValidatePassword && (
                  <i className="fas fa-check BasicForm__passwordOk" />
                )}
            </div>
                {password && passwordError  &&
                <div className="help-block">Lösenordet måste vara minst 6 tecken långt</div>
                }
                {!passwordError && password && password !== ValidatePassword &&
                <div className="help-block">Bekräfta lösenordet nedan</div>
                }
            {submitted &&
              !password && (
                <div className="help-block">
                  Glöm inte att fylla i nytt lösenord
                </div>
              )}
          </div>
          <div className="form-group">
            <div className="BasicForm__check">
              <input
                type="password"
                name="ValidatePassword"
                className="form-control obl"
                placeholder="Bekräfta Lösenord *"
                value={ValidatePassword}
                minLength='6'
                onChange={this.handleChange}
              />
              {ValidatePassword &&
                password !== ValidatePassword && (
                  <i className="fas fa-check BasicForm__passwordNotOk" />
                )}
              {ValidatePassword &&
                password === ValidatePassword && (
                  <i className="fas fa-check BasicForm__passwordOk" />
                )}
            </div>
            {submitted &&
              !ValidatePassword && (
                <div className="help-block">Du måste upprepa lösenordet!</div>
              )}
          </div>

          {!name || !customer_type || !email || !password ||
              !ValidatePassword ? (
                <div className="help-block">* Dessa fält är obligatoriska</div>
              )
              :('')}
          <div className="buttons">
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Registrera ny användare
              </button>
              {errorMessage && <div className="help-block">{errorMessage}</div>}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

  
export default connect(null, mapDispatchToProps)(CreateUser);
