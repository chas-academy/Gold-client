import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCustomer, updateCustomer } from "../../redux/actions/admin/Accounts";
import Cookies from "universal-cookie";

import "./style.css";
import { LocationSearchInput } from "../../components";

class UpdateCustomer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customer: this.customer,
      errorMessage: "",
      telError: "",
      isAdmin: "",
      numberError: "",
      adminProfile: "",
      password: "",
      ValidatePassword: "",
      submitted: "",
      id: this.props.id
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    const cookies = new Cookies();
    var token = cookies.get("token");
    const user = JSON.parse(
      window.atob(
        token
          .split(".")[1]
          .replace("-", "+")
          .replace("_", "/")
      )
    );
    
    !this.state.id && user.user_type === 'admin' ? 
    (
      this.setState({ isAdmin: true, adminProfile: true }),
      this.props.dispatch(fetchCustomer(user.id, token))
     ) : !this.state.id ?
     (
      this.setState({ isAdmin: false }),
      this.props.dispatch(fetchCustomer(user.id, token))
     ) : this.state.id && user.user_type === 'admin' ?
     (
      this.setState({ isAdmin: true }),
      this.props.dispatch(fetchCustomer(this.state.id, token))
    ) : ( 
      this.setState({ isAdmin: false }),
      this.props.dispatch(fetchCustomer(this.state.id, token))
    )
  }


  handleSubmit(event) {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ [name]: value });

    const cookies = new Cookies();
    var token = cookies.get("token");

    this.setState({ submitted: true });
    const customer = this.state.customer;

    var errorMessage = ''
    if (!this.state.numberError && !this.state.passwordError && !this.state.phoneError) {
      
      if ( customer ) {
        this.props.dispatch(updateCustomer({ customer, token }))
        .then((res) => {
          if (!res) {
            this.setState({ success: true })
          } else {
            res.errors.forEach(error => {
              errorMessage = error.message
              if (error.message == "Validation isEmail on email failed") {
                errorMessage = "Felaktigt email"
              } else if (error.message == "email must be unique") {
                errorMessage = "Email är redan tagen"
              } else if (error.message == "tel must be unique") {
                errorMessage = "Telefonnummer är redan tagen"
              }
            errorMessage = 'oops';
          })
        }
        });
            this.setState({ errorMessage: errorMessage, submitted: false })
          }
      }
    }

  
  render() {
    const {
      adminProfile,
      submitted,
      passwordError,
      errorMessage,
      isAdmin,
      password,
      ValidatePassword,
      telError,
      numberError,
      type
    } = this.state;

    const { customer } = this.props;

    console.log(customer.user);

    return (
      <div className="col-md-6 col-md-offset-3">
        <form name="form" className="BasicForm" onSubmit={this.handleSubmit}>
          <h5> Uppdatera kundprofil</h5>
          <div className="form-group">
            <div className="BasicForm__check">
            {customer.user ? 
              <input
                type="text"
                name="user.name"
                className="form-control"
                placeholder="Namn"
                value={customer.user.name}
              />
              : ('')}
              {customer.name && <i className="fas fa-check BasicForm__check" />}
            </div>
            {submitted &&
              !customer.name && (
                <div className="help-block">Glöm inte fylla i namnet!</div>
              )}
          </div>
          <div className="form-group">
            <div className="BasicForm__check">
              <input
                type="text"
                name="user.email"
                className="form-control"
                placeholder="Email"
                value={customer.email}
              />
              {customer.email && <i className="fas fa-check BasicForm__check" />}
            </div>
            {submitted &&
              !customer.email && (
                <div className="help-block">Glöm inte fylla i email!</div>
              )}
          </div>
          <div className="form-group">
            <div className="BasicForm__check">
              <input
                type="text"
                name="user.tel"
                className="form-control"
                placeholder="Telefonnummer"
                value={customer.tel}
              />
              {customer.tel &&
                !telError && <i className="fas fa-check BasicForm__check" />}
            </div>
            {submitted &&
              !customer.tel && (
                <div className="help-block">
                  Glöm inte fylla i telefonnummer!
                </div>
              )}
            {customer.tel &&
              telError && (
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
                value={customer.password}
              />
              {password &&
                passwordError &&
                password !== ValidatePassword && (
                  <i className="fas fa-check BasicForm__passwordNotOk" />
                )}
              {password &&
                password !== ValidatePassword &&
                !passwordError && (
                  <i className="fas fa-check BasicForm__check" />
                )}

              {password &&
                password === ValidatePassword && (
                  <i className="fas fa-check BasicForm__passwordOk" />
                )}
            </div>
            {password &&
              passwordError && (
                <div className="help-block">
                  Lösenordet måste vara minst 8 tecken långt
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
            <div className="BasicForm__check">
              <input
                type="password"
                name="ValidatePassword"
                className="form-control"
                placeholder="Bekräfta Lösenord"
                value={ValidatePassword}
              />
              {ValidatePassword &&
                customer.password !== ValidatePassword && (
                  <i className="fas fa-check BasicForm__passwordNotOk" />
                )}
              {ValidatePassword &&
                customer.password === ValidatePassword && (
                  <i className="fas fa-check BasicForm__passwordOk" />
                )}
            </div>
            {submitted &&
              !ValidatePassword && (
                <div className="help-block">Du måste upprepa lösenordet!</div>
              )}
          </div>
          <div className="form-group">
            <LocationSearchInput />
            {submitted &&
              !customer.adress && (
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
            {!adminProfile && isAdmin ? (
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

const mapStateToProps = state => ({
  customer: state.adminAccounts.customer
});

export default connect(mapStateToProps)(UpdateCustomer);
