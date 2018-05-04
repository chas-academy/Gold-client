import React, { Component } from 'react';
// import { loginUser } from '../actions/auth';
// import { connect } from 'react-redux';
import './style.css';
class SignIn extends Component {
  constructor (props) {
    super(props);

    this.state = {
      number: '',
      password: '',
      passwordError: null,
      numberError: null,
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

  if (this.state.number.match(isNumeric)) {
    this.setState({ numberError: false });
  } else {
    this.setState({ numberError: true });
  }

}

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ submitted: true });

    const loginUser = {
      pers_org_num: this.state.number,
      password: this.state.password
    }

    const url = '';

    if (process.env.NODE_ENV === 'production') {
      const url = process.env.REACT_APP_API_BASE_URL;
    } else {
      const url = 'http://localhost:7770';
    }
    
    fetch(`${url}/login`, {
      method: 'POST',
      body: JSON.stringify(loginUser),
      headers: {
      "Content-Type": "application/json"
      }
    })
    .then((res) => res.json())
    .then(res => {
      console.log(res)
    });

    //dispatch goes here...
  }

    render() {
      const {
        number,
        submitted,
        numberError,
        password,
        // passwordError,
        // errorMessage,
      } = this.state;

    return (
      <div className="col-md-6 col-md-offset-3">
          <form name="form" className="BasicForm" onSubmit={this.handleSubmit}> 

            <div className="form-group">
            <label className="BasicForm__label"> Person/organisationsnummer </label>
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
          </div>  
              <div className="form-group">
              <button className="btn btn-primary">
                Logga in
              </button>
            </div>  
          </form>    
      </div>           
      )
  }

}
  
export default SignIn;
