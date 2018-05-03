import React, { Component } from "react";
// import { loginUser } from '../actions/auth';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';

import {
  AddPhotos,
  DateTime,
  ImageUploader,
  LocationSearchInput,
  MultipleSelect
} from "../../components";

import "./style.css";

class AddOrder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adress: "",
      contact: "",
      customerId: "",
      date: "",
      description: "",
      employee: "",
      errorMessage: "",
      isAdmin: false,
      phone: "",
      photo: "",
      submitted: ""
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

  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ submitted: true });
  }

  render() {
    const {
      adress,
      contact,
      customerId,
      date,
      description,
      employee,
      errorMessage,
      isAdmin,
      phone,
      phoneError,
      photo,
      submitted
    } = this.state;

    return (
      <div className="col-md-6 col-md-offset-3">
        <form name="form" className="BasicForm" onSubmit={this.handleSubmit}>
          <h5>Beställning</h5>
          <input
            type="hidden"
            name="customerId"
            className="form-control"
            placeholder="Kundnummer"
            value={customerId}
            onChange={this.handleChange}
          />
          <div className="form-group">
            <div className="BasicForm__check">
              <input
                type="text"
                name="contact"
                className="form-control"
                placeholder="Kontaktperson"
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
            {phone && phoneError && (
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
                placeholder="Beskriv gärna detaljerat vad som ska åtgärdas"
                value={description}
                onChange={this.handleChange}
              />
              {description &&
                <i className="fas fa-check BasicForm__check" />}
              </div>
              {submitted &&
                !description && (
                  <div className="help-block">
                    Glöm inte att beskriva ärendet!
                  </div>
                )}
                <LocationSearchInput />
            <label class="BasicForm__checkboxContainer">
                <input type="checkbox" />
              <span class="BasicForm__checkmark">
                <i className="fas fa-hand-point-right"></i>
                <i className="fas fa-exclamation-circle"></i>
                Akut ärende? (åtgärdas inom 4h)
              </span>
            </label>
            {isAdmin === true ? (
              <div className="form-group">
            <MultipleSelect />
            {submitted &&
              !employee && (
                <div className="help-block">
                  Glöm inte att tilldela ärendet till rätt person!
                </div>
              )}
              </div>
          ) : ('')}
            <DateTime />
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Skicka
              </button>
              {errorMessage && <div className="help-block">{errorMessage}</div>}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddOrder;
