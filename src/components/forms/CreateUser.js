import React, { Component } from "react";
import { registerUser } from "../../redux/actions/Auth";
import { connect } from "react-redux";

import "./style.css";

const mapDispatchToProps = dispatch => {
  return { registerUser: regUser => dispatch(registerUser(regUser)) };
};

class CreateUser extends Component {
  constructor(props) {
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
      !this.state.telError
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
      ValidatePassword
    } = this.state;

    return (
      <div className="col-md-6 col-md-offset-3">
        <form name="form" className="BasicForm" onSubmit={this.handleSubmit}>
          <h5> Skapa Användare </h5>
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
          <label htmlFor="customer_type">Typ av användare</label>
              <select onChange={this.handleSelectChange.bind(this)}>
                <option selected disabled>
                  välj *{" "}
                </option>
                <option value="admin">Admin</option>
                <option value="employee">Anställd</option>
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
              telError && (
                <div className="help-block">Oopa! fick du med en bokstav?</div>
              )}
          </div>
          <div className="form-group">
          <label htmlFor="password">Lösenord</label>
            <div className="validation__checkmark ">
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
                <div className="help-block">
                  Glöm inte att fylla i lösenord
                </div>
              )}
          </div>
          <div className="form-group">
          <label htmlFor="ValidatePassword">Bekräfta lösenordet</label>
            <div className="validation__checkmark">
              <input
                type="password"
                name="ValidatePassword"
                className="form-control"
                placeholder="minst 6 tecken*"
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
                <div className="help-block">Du måste bekräfta lösenordet</div>
              )}
          </div>

          {!name ||
          !customer_type ||
          !email ||
          !password ||
          !ValidatePassword ? (
            <div className="help-block">* Dessa fält är obligatoriska</div>
          ) : (
            ""
          )}
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

export default connect(
  null,
  mapDispatchToProps
)(CreateUser);
