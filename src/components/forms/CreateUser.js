import React, { Component } from 'react';
import { registerUser } from '../../redux/actions/Auth';
import { connect } from 'react-redux';

import { LocationSearchInput } from "../../components";

import './style.css';


const mapDispatchToProps = dispatch => {
  return { registerUser: regUser => dispatch(registerUser(regUser)) };
};


class CreateUser extends Component {
  constructor (props) {
    super(props);


    this.state = {
      address: "",
      email: "",
      errorMessage: "",
      lat: "",
      lon: "",
      name: "",
      pers_org_num: "",
      numberError: "",
      password: "",
      passwordError: "",
      tel: "",
      customer_type: "",
      phoneError: "",
      success: false,
      submitted: "",
      ValidatePassword: ""
    };

    this.getAddress = this.getAddress.bind(this);
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
      this.setState({ phoneError: false });
    } else {
      this.setState({ phoneError: true });
    }

    if (this.state.pers_org_num.match(isNumeric)) {
      this.setState({ numberError: false });
    } else {
      this.setState({ numberError: true });
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
      pers_org_num: this.state.pers_org_num,
      password: this.state.password,
      passwordVal: this.state.ValidatePassword,
      type: this.state.customer_type,
    }

    var errorMessage = ''
    if (!this.state.numberError && !this.state.passwordError && !this.state.phoneError) {
      if ( regUser ) {
        this.props.registerUser({ regUser })
        .then((res) => {
          if (res) {
            this.setState({ success: true })
            // send email?
          } else {
            res.errors.forEach(error => {
              errorMessage = error.message
              if (error.message == "pers_org_num must be unique") {
                errorMessage = "Person/Organisationsnummer är redan registrerat"
              }
            });
            this.setState({ errorMessage: errorMessage, submitted: false })
          }
        })
      }
    }
  }
  
  getAddress(address, lat,  lon) {
    this.setState({ address: address, lat: lat, lon: lon })
  }
  
  render() {
    const {
      company,
      customer_type,
      address,
      email,
      errorMessage,
      submitted,
      name,
      pers_org_num,
      numberError,
      password,
      passwordError,
      tel,
      phoneError,
      privateCustomer,
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
                className="form-control"
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
                <option defaultValue>Välj typ av användare </option>
                <option value="admin">Admin *</option>
                <option value="employee">Anställd *</option>
                <option value="private">Privatkund *</option>
                <option value="company">Företagskund *</option>
              </select>  
          {(customer_type) && <i className="fas fa-check BasicForm__check" />}
            </div>
          </div>      
          <div className="form-group">
            <div className="BasicForm__check">
              <input
                type="text"
                name="pers_org_num"
                className="form-control"
                placeholder="pers: YYMMDDXXXX / org: XXXXXXXXXX *"
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
                name="tel"
                className="form-control"
                placeholder="Telefonnummer"
                value={tel}
                onChange={this.handleChange}
              />
              {tel &&
                !phoneError && <i className="fas fa-check BasicForm__check" />}
            </div>
            {submitted &&
              !tel && (
                <div className="help-block">
                  Glöm inte fylla i telefonnummer!
                </div>
              )}
            {tel &&
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
                className="form-control"
                placeholder="Bekräfta Lösenord"
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
          <div className="form-group">
            <LocationSearchInput getAddress={this.getAddress.bind(this)} />
          </div>
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
