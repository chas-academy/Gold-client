import React, { Component } from "react";
import { registerUser } from "../../redux/actions/Auth";
import { connect } from "react-redux";
import { LocationSearchInput } from "../../components";

import "./style.css";

const mapDispatchToProps = dispatch => {
  return { registerUser: regUser => dispatch(registerUser(regUser)) };
};

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: "",
      email: "",
      errorMessage: "",
      lat: "",
      lon: "",
      name: "",
      password: "",
      passwordError: "",
      tel: "",
      customer_type: "",
      phoneError: null,
      success: false,
      submitted: "",
      userIsNotAdmin: this.props,
      ValidatePassword: ""
    };

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
      this.setState({ phoneError: false });
    } else {
      this.setState({ phoneError: true });
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
      password: this.state.password,
      passwordVal: this.state.ValidatePassword,
      type: this.state.customer_type,
      email: this.state.email,
      tel: this.state.tel,
      address: this.state.address,
      lat: this.state.lat,
      lon: this.state.lon
    };

    var errorMessage = "";
    if (
      !this.state.numberError &&
      !this.state.passwordError &&
      !this.state.phoneError
    ) {
      if (regUser) {
        this.props.registerUser({ regUser }).then(res => {
          if (!res) {
            this.setState({ success: true });
            window.location.reload(true);
          } else {
            res.errors.forEach(error => {
              errorMessage = error.message;
              if (error.message === "Validation isEmail on email failed") {
                errorMessage = "Din email är felaktigt ifylld";
              } else if (error.message === "email must be unique") {
                errorMessage = "Denna email är redan registrerad. Kontakta oss på Servicebyrån om du har glömt bort dina inloggningsuppgifter";
              } else if (error.message === "tel must be unique") {
                errorMessage =
                  "Detta telefonnummer är redan registrerat på en användare. Kontakta oss på Servicebyrån om du har glömt bort dina inloggningsuppgifter";
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
      customer_type,
      email,
      errorMessage,
      submitted,
      name,
      password,
      passwordError,
      tel,
      phoneError,
      ValidatePassword
    } = this.state;

    return (
      <div className="col-md-6 col-md-offset-3">
        <form name="form" className="BasicForm" onSubmit={this.handleSubmit}>
            <label htmlFor="customer_type">Kundtyp</label>
              <select
                name="customer_type"
                onChange={this.handleSelectChange.bind(this)} >
                <option defaultValue>Välj</option>
                <option value="private">Privatkund</option>
                <option value="company">Företagskund</option>
              </select>
          <div className="form-group">
            <label htmlFor="name">Namn</label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="namn"
                value={name}
                onChange={this.handleChange}
              />
            {submitted &&
              !name && (
                <div className="help-block">Glöm inte fylla i ditt namn!</div>
              )}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                className="form-control"
                placeholder="example@email.com"
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
                placeholder="telefonnummer"
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
                placeholder="minst 6 tecken"
                value={password}
                minLength="6"
                onChange={this.handleChange}
              />
              {password &&
                passwordError &&
                password !== ValidatePassword && (
                  <i className="fas fa-check validation--password--failed" />
                )}
              {password &&
                password !== ValidatePassword &&
                !passwordError && (
                  <i className="fas fa-check validation__checkmark" />
                )}

              {password &&
                password === ValidatePassword && (
                  <i className="fas fa-check validation--password--passed" />
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
                <div className="help-block">Glöm inte att fylla i lösenord</div>
              )}
          </div>
          <div className="form-group">
            <label htmlFor="ValidatePassword">Bekräfta lösenord</label>
            <div className="validation__checkmark">
              <input
                type="password"
                name="ValidatePassword"
                className="form-control"
                placeholder="minst 6 tecken"
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
          <div className="buttons">
            <div className="form-group">
            {customer_type && name && email && tel && password === ValidatePassword ?
             <button type="submit" className="btn btn-primary">
                Registrera
              </button> :
              <button type="submit" disabled className="btn btn-secondary">
              Registrera
            </button>}
              {errorMessage && <div className="help-block">{errorMessage}</div>}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(SignUp);
