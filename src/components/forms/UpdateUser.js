import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser, updateUser } from "../../redux/actions/admin/Accounts";
import Cookies from "universal-cookie";

import "./style.css";
import { LocationSearchInput } from "../../components";

class UpdateUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: this.props,
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
      this.props.dispatch(fetchUser(user.id, token))
     ) : !this.state.id ?
     (
      this.setState({ isAdmin: false }),
      this.props.dispatch(fetchUser(user.id, token))
     ) : this.state.id && user.user_type === 'admin' ?
     (
      this.setState({ isAdmin: true }),
      this.props.dispatch(fetchUser(this.state.id, token))
    ) : ( 
      this.setState({ isAdmin: false }),
      this.props.dispatch(fetchUser(this.state.id, token))
    )
  }


  handleSubmit(event) {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ [name]: value });

    const cookies = new Cookies();
    var token = cookies.get("token");

    this.setState({ submitted: true });
    const user = this.state.user;

    var errorMessage = ''
    if (!this.state.passwordError && !this.state.telError) {
      
      if ( user ) {
        this.props.dispatch(updateUser({ user, token }))
        .then((res) => {
          if (!res) {
            this.setState({ success: true })
          } else {
            res.errors.forEach(error => {
              errorMessage = error.message
              if (error.message == "pers_org_num must be unique") {
                errorMessage = "Pers/Orgnummer är redan taget"
              } else if (error.message == "Validation isEmail on email failed") {
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
      phoneError,
      type
    } = this.state;

    const { user } = this.props;

    console.log(user);
    return (
      <div className="col-md-6 col-md-offset-3">
        <form name="form" className="BasicForm" onSubmit={this.handleSubmit}>
          <h5> Uppdatera profil</h5>
          {user.type === 'admin' ?
           <p> Din profil </p>
           : user.type === "employee" ? (
            <p> Anställd </p>
          ) : user.type === "customer" ? (
            <p> Kund </p>
          ) : (
            ""
          )}
          <div className="form-group">
            <div className="BasicForm__check">
              <input
                type="text"
                name="user.name"
                className="form-control"
                placeholder="Namn"
                value={user.name}
              />
              {user.name && <i className="fas fa-check BasicForm__check" />}
            </div>
            {submitted &&
              !user.name && (
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
                value={user.email}
              />
              {user.email && <i className="fas fa-check BasicForm__check" />}
            </div>
            {submitted &&
              !user.email && (
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
                value={user.tel}
              />
              {user.tel &&
                !phoneError && <i className="fas fa-check BasicForm__check" />}
            </div>
            {submitted &&
              !user.tel && (
                <div className="help-block">
                  Glöm inte fylla i telefonnummer!
                </div>
              )}
            {user.tel &&
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
                user.password !== ValidatePassword && (
                  <i className="fas fa-check BasicForm__passwordNotOk" />
                )}
              {ValidatePassword &&
                user.password === ValidatePassword && (
                  <i className="fas fa-check BasicForm__passwordOk" />
                )}
            </div>
            {submitted &&
              !ValidatePassword && (
                <div className="help-block">Du måste upprepa lösenordet!</div>
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
  user: state.adminAccounts.user
});

export default connect(mapStateToProps)(UpdateUser);
