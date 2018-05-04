import React, { Component } from 'react';
// import { loginUser } from '../actions/auth';
// import { connect } from 'react-redux';

import './style.css';
import { LocationSearchInput } from "../../components";


class SignUp extends Component {
  constructor (props) {
    super(props);


    this.state = {
      address: "",
      lat: "",
      lon: "",
      company: null,
      email: "",
      errorMessage: "",
      name: "",
      number: "",
      numberError: null,
      password: "",
      phone: "",
      privateCustomer: null,
      phoneError: null,
      submitted: "",
      userIsNotAdmin: this.props,
      ValidatePassword: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  callback(address, lat,  lon) {
    this.setState({ address: address, lat: lat, lon: lon })
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

    if (this.state.password.length >= 7) {
      this.setState({ passwordError: false });
    } else {
      this.setState({ passwordError: true });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ submitted: true });

    let type = null;
    if (this.state.company == null) {
      type = "private";
    } else {
      type = "company";
    }

    const regUser = {
      name: this.state.name,
      pers_org_num: this.state.number,
      password: this.state.password,
      type: type,
      email: this.state.email,
      tel: this.state.phone,
      address: this.state.address,
      lat: this.state.lat,
      lon: this.state.lon
    }

    // const url = '';

    // if (process.env.NODE_ENV === 'development') {
    //   const url = 'http://localhost:7770';
    // } else {
    //   const url = process.env.REACT_APP_API_BASE_URL;
    // }
    
    
    fetch(process.env.REACT_APP_API_BASE_URL+'/register', {
      method: 'POST',
      body: JSON.stringify(regUser),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((res) => res.json())
    .then(res => {
      console.log(res)
    })
  }
  
  render() {
    const {
      address,
      company,
      email,
      errorMessage,
      submitted,
      name,
      number,
      numberError,
      password,
      passwordError,
      phone,
      phoneError,
      privateCustomer,
      ValidatePassword,
    } = this.state;

    return (
      <div className="col-md-6 col-md-offset-3">
        <form name="form" className="BasicForm" onSubmit={this.handleSubmit}>
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
              <select className="BasicForm__select">
                <option defaultValue>Välj typ av kund </option>
                <option value="privateCustomer">Privatkund</option>
                <option value="company">Företagskund</option>
              </select>  
          {(privateCustomer || company) && <i className="fas fa-check BasicForm__check" />}
            </div>
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
              {number &&
                !numberError && <i className="fas fa-check BasicForm__check" />}
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
                <div className="help-block">Lösenordet måste vara minst 8 tecken långt</div>
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
                className="form-control"
                placeholder="Bekräfta Lösenord"
                value={ValidatePassword}
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
          <div className="form-group">
            <LocationSearchInput callback={this.callback.bind(this)} />
            {submitted &&
              !address && (
                <div className="help-block">Glöm inte fylla i adressen!</div>
              )}
          </div>
          <div className="buttons">
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Registrera
              </button>
              {errorMessage && <div className="help-block">{errorMessage}</div>}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

  
export default SignUp;
