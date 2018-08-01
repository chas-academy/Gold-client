import React, { Component } from "react";
import { registerUser } from "../../redux/actions/Auth";
import { connect } from "react-redux";

import { LocationSearchInput } from "../../components";

import "./style.css";

const mapDispatchToProps = dispatch => {
  return { registerUser: regUser => dispatch(registerUser(regUser)) };
};

class CreateCustomer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: "",
      email: "",
      errorMessage: "",
      lat: "",
      lon: "",
      name: "",
      numberError: "",
      password: "",
      passwordError: "",
      tel: "",
      customer_type: "",
      telError: "",
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
    });
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

    if (this.state.password.length >= 5) {
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
      type: this.state.customer_type
    };

    var errorMessage = "";
    if (
      !this.state.numberError &&
      !this.state.passwordError &&
      !this.state.phoneError
    ) {
      if (regUser) {
        this.props.registerUser({ regUser }).then(res => {
          if (res) {
            this.setState({ success: true });
            // send email?
          } else {
            res.errors.forEach(error => {
              errorMessage = error.message;
              if (error.message === "pers_org_num must be unique") {
                errorMessage =
                  "Person/Organisationsnummer är redan registrerat";
              }
            });
            this.setState({ errorMessage: errorMessage, submitted: false });
          }
        });
      }
    }
  }

  getAddress(address, lat, lon) {
    this.setState({ address: address, lat: lat, lon: lon });
  }

  render() {
    const {
      address,
      customer_type,
      email,
      errorMessage,
      submitted,
      name,
      pers_org_num,
      password,
      passwordError,
      tel,
      phoneError,
      ValidatePassword
    } = this.state;

    return (
      <div className="col-md-6 col-md-offset-3">
        <form name="form" className="BasicForm" onSubmit={this.handleSubmit}>
          <h5> Lägg till ny kund </h5>
          <div className="form-group">
            <label htmlFor="name">Namn</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="namn *"
              value={name}
              onChange={this.handleChange}
            />
            {submitted &&
              !name && (
                <div className="help-block">Glöm inte fylla i namnet!</div>
              )}
          </div>
          <label htmlFor="customer_type">Namn</label>
            <select onChange={this.handleSelectChange.bind(this)} >
              <option name="customer_type" selected disabled>
                Välj typ av användare *{" "}
              </option>
              <option value="private">Privatkund</option>
              <option value="company">Företagskund</option>
            </select>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              className="form-control"
              placeholder="email *"
              value={email}
              onChange={this.handleChange}
            />
            {submitted &&
              !email && (
                <div className="help-block">Glöm inte fylla i email!</div>
              )}
          </div>
          <div className="form-group">
            <label htmlFor="tel">Telefonnummer</label>
            <input
              type="text"
              name="tel"
              className="form-control"
              placeholder="Telefonnummer"
              value={tel}
              onChange={this.handleChange}
            />
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
              <label htmlFor="password">Lösenord</label>
              <div className="validation__checkmark">
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="minst 6 tecken *"
                value={password}
                minLength="6"
                onChange={this.handleChange}
              />
              {password &&
                passwordError &&
                password !== ValidatePassword && (
                  <i className="fas fa-check validation--password--failed " />
                )}
              {password &&
                password !== ValidatePassword &&
                !passwordError && (
                  <i className="fas fa-check validation__checkmark" />
                )}

              {password &&
                password === ValidatePassword && (
                  <i className="fas fa-check validation--password--passed " />
                )}
            </div>
            {password &&
              passwordError && (
                <div className="help-block">
                  Lösenordet måste vara minst 6 tecken långt
                </div>
              )}
            {!passwordError &&
              password &&
              password !== ValidatePassword && (
                <div className="help-block">Bekräfta lösenordet nedan</div>
              )}
            {submitted &&
              !password && (
                <div className="help-block">
                  Glöm inte att fylla i nytt lösenord
                </div>
              )}
          </div>
          <div className="form-group">
              <label htmlFor="ValidatePassword">Bekräfta lösenord</label>
            <div className="validation__checkmark">
              <input
                type="password"
                name="ValidatePassword"
                className="form-control"
                placeholder="minst 6 tecken *"
                value={ValidatePassword}
                minLength="6"
                onChange={this.handleChange}
              />
              {ValidatePassword &&
                password !== ValidatePassword && (
                  <i className="fas fa-check validation--password--failed" />
                )}
              {ValidatePassword &&
                password === ValidatePassword && (
                  <i className="fas fa-check validation--password--passed" />
                )}
            </div>
            {submitted &&
              !ValidatePassword && (
                <div className="help-block">Du måste upprepa lösenordet!</div>
              )}
          </div>
          <div className="form-group">
            <LocationSearchInput
              getAddress={this.getAddress.bind(this)}
              submitted={submitted}
            />
          </div>
          {!name ||
          !customer_type ||
          !pers_org_num ||
          !password ||
          !ValidatePassword ? (
            <div className="help-block">* Dessa fält är obligatoriska</div>
          ) : (
            ""
          )}
          <div className="buttons">
            <div className="form-group">
              {customer_type &&
              name &&
              email &&
              tel &&
              address &&
              password === ValidatePassword ? (
                <button type="submit" className="btn btn-primary">
                  Registrera ny kund
                </button>
              ) : (
                <button type="submit" disabled className="btn btn-secondary">
                  Registrera ny kund
                </button>
              )}
              {errorMessage && <div className="help-block">{errorMessage}</div>}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(CreateCustomer);
