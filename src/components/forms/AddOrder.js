import React, { Component } from "react";
// import { loginUser } from '../actions/auth';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';

import {
  DateTimePhoto,
  LocationSearchInput,
  MultipleSelect
} from "../../components";
import Cookies from "universal-cookie";

import "./style.css";

class AddOrder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: "",
      contact: "",
      customerId: "",
      date: "",
      description: "",
      employee: "",
      errorMessage: "",
      isAdmin: this.props,
      lat: "",
      lon: "",
      phone: "",
      photo: "",
      submitted: false,
      time: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
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

    this.setState({
      // address: user.address,
      contact: user.name,
      customerId: user.id,
      phone: user.tel
    })
  }
  
  getAddress(address, lat,  lon) {
    this.setState({ address: address, lat: lat, lon: lon })
  }

  getDate(date) {
    this.setState({ date: date })
  }

  getTime(time) {
    this.setState({ time: time })
  }

  getPhoto(photo) {
    this.setState({ photo: photo })
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

    const cookies = new Cookies();
    const token = cookies.get("token");
    const user = JSON.parse(
      window.atob(
        token
          .split(".")[1]
          .replace("-", "+")
          .replace("_", "/")
      )
    );

    var company_name = ''
    if (user.customer_type && user.customer_type === "company") {
      company_name = user.name
    }

    const formData = {
      client_id: this.state.customerId,
      company_name: company_name,
      con_pers: this.state.contact,
      con_tel: this.state.phone,
      date: this.state.date,
      time: this.state.time,
      address: this.state.address,
      lat: this.state.lat,
      lon: this.state.lon,
      description: this.state.description,
      images: this.state.photo
    }

    const form = new FormData()
    form.append('client_id', formData.client_id)
    form.append('company_name', formData.company_name)
    form.append('con_pers', formData.con_pers)
    form.append('con_tel', formData.con_tel)
    form.append('date', formData.date)
    form.append('time', formData.time)
    form.append('address', formData.address)
    form.append('lat', formData.lat)
    form.append('lon', formData.lon)
    form.append('description', formData.description)
    formData.images.forEach((image, i) => {
      form.append('images[]', image, new Date().getTime()+ i + '.' + image.type.split('/')[1])
    })
    console.log(formData)
    

    fetch(process.env.REACT_APP_API_BASE_URL + "/orders/create", {
      method: "POST",
      body: form,
      headers: {
        // "Content-Type": "multipart/form-data",
        "Authorization": token
      }
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
      });
  }

  render() {
    const {
      contact,
      customerId,
      description,
      employee,
      errorMessage,
      isAdmin,
      phone,
      phoneError,
      submitted
    } = this.state;

    return (
      <div className="col-md-6 col-md-offset-3">
        <form name="form" className="BasicForm" onSubmit={this.handleSubmit} encType="multipart/form-data">
          <h5> Skapa Beställning</h5>
          {isAdmin === true ? (
            <div className="form-group">
            <div className="BasicForm__check">

          <select className="BasicForm__select">
            <option defaultValue>Välj kund</option>
            <option value="customerId">Stena</option>
          </select>  
          {customerId && <i className="fas fa-check BasicForm__check" />}
            </div>
            {submitted &&
              !customerId && (
                <div className="help-block">
                  Glöm inte välja rätt kund!
                </div>
              )}
              </div>
          ) : (
          <input
            type="hidden"
            name="customerId"
            className="form-control"
            placeholder="Kundnummer"
            value={customerId}
            onChange={this.handleChange}
          />
        )}
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
            <div className="form-group">
                <LocationSearchInput getAddress={this.getAddress.bind(this)} submitted={submitted}/>
            </div>

            <label className="BasicForm__checkboxContainer">
                <input type="checkbox" />
              <span className="BasicForm__checkmark">
                <i className="fas fa-circle"></i>
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
            <DateTimePhoto getDate={this.getDate.bind(this)} getTime={this.getTime.bind(this)} getPhoto={this.getPhoto.bind(this)} />
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
