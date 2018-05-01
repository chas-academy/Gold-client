import React, { Component } from "react";
// import { loginUser } from '../actions/auth';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';

import "./style.css";
import { Contact, LocationSearchInput, Logo } from "../../components";

class UpdateUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adress: "",
      email: "",
      errorMessage: "",
      name: "",
      number: "",
      numberError: null,
      password: "",
      phone: "",
      phoneError: null,
      submitted: "",
      userIsNotAdmin: this.props,
      ValidatePassword: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    
    const isNumeric = /^[0-9]+$/;

    if (this.state.phone.match(isNumeric)) {
      this.setState({ phoneError: false });
    } else {
      this.setState({ phoneError: true });
    }
    
    if (this.state.number.match(isNumeric)) {
      this.setState({ numberError: false });
    } else {
      this.setState({ numberError: true });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ submitted: true });
  }

  render() {
    const {
      submitted,
      name,
      email,
      password,
      phone,
      number,
      adress,
      errorMessage,
      userIsNotAdmin,
      ValidatePassword,
      phoneError,
      numberError
    } = this.state;

    return (
      <div className="col-md-6 col-md-offset-3">
        <form name="form" className="BasicForm" onSubmit={this.handleSubmit}>
          <h5>Uppdatera din profil</h5>
          <div className="form-group">
            <div className="BasicForm__check">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Namn"
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
              <input
                type="text"
                name="number"
                className="form-control"
                placeholder="YYMMDDXXXX / XXXXXXXXXX"
                value={number}
                onChange={this.handleChange}
              />
              {number && !numberError && <i className="fas fa-check BasicForm__check" />}
            </div>
            {submitted &&
              !number && (
                <div className="help-block">
                  Glöm inte fylla i Person/organisationsnummer!
                </div>
              )}
            {number &&
              numberError && (
                <div className="help-block">Oopa! fick du med en bokstav?</div> 
              )}
          </div>
          <div className="form-group">
            <div className="BasicForm__check">
              <input
                type="text"
                name="email"
                className="form-control"
                placeholder="Email"
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
                name="phone"
                className="form-control"
                placeholder="Telefonnummer till kontaktperson"
                value={phone}
                onChange={this.handleChange}
              />
              {phone &&
                !phoneError && <i className="fas fa-check BasicForm__check" />}
            </div>
            {submitted &&
              !phone && (
                <div className="help-block">
                  Glöm inte fylla i telefonnummer!
                </div>
              )}
            {phone &&
              phoneError && (
                <div className="help-block">Oopa! fick du med en bokstav?</div>
              )}
          </div>
          <div className="form-group">
            <div className="BasicForm__check">
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Lösenord"
                value={password}
                onChange={this.handleChange}
              />
              {password && password !== ValidatePassword && <i className="fas fa-check BasicForm__passwordNotOk" />}
              {password && password === ValidatePassword && <i className="fas fa-check BasicForm__passwordOk" />}
            </div>
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
                className="form-control"
                placeholder="Bekräfta Lösenord"
                value={ValidatePassword}
                onChange={this.handleChange}
              />
              {ValidatePassword && password !== ValidatePassword && <i className="fas fa-check BasicForm__passwordNotOk" />}
              {ValidatePassword && password === ValidatePassword && <i className="fas fa-check BasicForm__passwordOk" />}
            </div>
            {submitted &&
              !ValidatePassword && (
                <div className="help-block">
                  Du måste upprepa lösenordet!
                </div>
              )}
          </div>
          <div className="form-group">
            <LocationSearchInput />
            {submitted &&
              !adress && (
                <div className="help-block">Glöm inte fylla i adressen!</div>
              )}
          </div>
          <div className="buttons">
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Spara
              </button>
              {errorMessage && <div className="help-block">{errorMessage}</div>}
            </div>
          </div>
          <div className="form-group">
            {userIsNotAdmin == true ? (
              <button className="btn btn-danger">Radera Användare</button>
            ) : (
              ""
            )}
          </div>
        </form>
      </div>
    );
  }
}

export default UpdateUser;
