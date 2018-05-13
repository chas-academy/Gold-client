import React, { Component } from "react";
import { connect } from 'react-redux';
import Cookies from "universal-cookie";
import { fetchService } from "../../redux/actions/admin/Orders";

import {
  DateTimePhoto,
  MultipleSelect,
  LocationSearchInput
} from "../../components";
import "./style.css";

class HandleOrder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      submitted: "",
      contact: "",
      customerId: "",
      phone: "",
      phoneError: null,
      adress: "",
      description: "",
      employee: "",
      errorMessage: "",
      message: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.delete = this.delete.bind(this);
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
      ))
      
      // this.props.match.params.id,
      const id = 1;

    this.props.dispatch(fetchService(token, id));
  }
  
  componentDidMount() {
    // const service = this.props;
    
    // this.status === "new" ?
    // this.setState({ message: `Detta är ett nytt ärende`})
    // : this.status === "assigned" ?
    //   this.setState({ message: `Det här ärendet har du tilldelat`})
    // : this.status === "taken" ?
    //   this.setState({ message: `Det här ärendet åtgärdar just nu`})
    // : this.status === "done" 
    //   this.setState({ message: `Det här ärendet är avslutat, för mer detaljer gå till avslutade ärenden`})

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
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ submitted: true });
  }

  delete(event) {
    event.preventDefault();
  }

  render() {
    const {
      submitted,
      contact,
      customerId,
      phone,
      phoneError,
      description,
      employee,
      errorMessage,
      message,
    } = this.state;

    const { service } = this.props; 

    return (
      <div className="col-md-6 col-md-offset-3">
        <form name="form" className="BasicForm" onSubmit={this.handleSubmit}>
        <h5> Hantera Ärende</h5>
        <p>{message}</p>
          <div className="form-group">
            <div className="BasicForm__check">
              <input
                type="text"
                name="contact"
                className="form-control"
                placeholder="Kontakperson"
                value={contact}
                onChange={this.handleChange}
              />
              {contact && <i className="fas fa-check BasicForm__check" />}
            </div>
            {submitted &&
              !contact && (
                <div className="help-block">
                  Glöm inte fylla i kontakperson!
                </div>
              )}
          </div>
          <div className="form-group">
            <div className="BasicForm__check">
              <input
                type="text"
                name="customerId"
                className="form-control"
                placeholder="Kundnummer"
                value={customerId}
                onChange={this.handleChange}
              />
              {customerId && <i className="fas fa-check BasicForm__check" />}
            </div>
            {submitted &&
              !customerId && (
                <div className="help-block">
                  Glöm inte fylla i kontakperson!
                </div>
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
              <textarea
                rows="5"
                type="text"
                className="BasicForm__textArea"
                name="description"
                placeholder="Detaljerad beskrivning av ärendet"
                value={description}
                onChange={this.handleChange}
              />
              {description && <i className="fas fa-check BasicForm__check" />}
            </div>
            {submitted &&
              !description && (
                <div className="help-block">
                  Glöm inte att beskriva ärendet!
                </div>
              )}
          </div>
          <div className="form-group">
            <MultipleSelect />
            {submitted &&
              !employee && (
                <div className="help-block">
                  Glöm inte att tilldela ärendet till rätt person
                </div>
              )}
          </div>
          <div className="form-group">
            <LocationSearchInput submitted={submitted}/>
          </div>
          <label className="BasicForm__checkboxContainer">
              <input type="checkbox" />
              <span className="BasicForm__checkmark">
                <i className="fas fa-circle"></i>
                Akut ärende? (åtgärdas inom 4h)
              </span>
            </label>
          <DateTimePhoto />
          <div className="buttons">
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Skicka ärende till anställd
              </button>
              {errorMessage && <div className="help-block">{errorMessage}</div>}
            </div>
            <div className="form-group">
              <button className="btn btn-danger" onClick={this.delete}>
                Radera ärende
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  service: state.adminOrders.service
});

export default connect(mapStateToProps)(HandleOrder);
