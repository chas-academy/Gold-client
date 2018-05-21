import React, { Component } from "react";
import { connect } from 'react-redux';
import Cookies from "universal-cookie";
import { fetchService } from "../../redux/actions/admin/Orders";
import Moment from 'react-moment';


import {
  DateTimePhoto,
  MultipleSelect,
  LocationSearchInput
} from "../../components";
import "./style.css";

class HandleService extends Component {
  constructor(props) {
    super(props);

    this.state = {
      admin: true,
      submitted: "",
      employee: [],
      errorMessage: "",
      message: '',
      id: this.props.id
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
      
      this.props.dispatch(fetchService(token, this.state.id));
  }
  

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
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
      admin,
      employee,
      submitted,
      telError,
      errorMessage,
    } = this.state;


    const { service } = this.props; 

    const description = '';
    const photos = [];
    const type = '';

    if (service.order) {
      this.type = "Beställning";
      this.description = service.order.description;
      this.photos = service.order.image_path;
    } else if (service.internal_order) {
      this.type = "Internt ärende"
      this.description = service.internal_order.description;
      this.photos = service.internal_order.image_path;
    } else if (service.complaint) {
      this.type = "Reklamation"
      this.description = service.complaint.description;
    } else (
      this.description = "Ingen beskrivning av ärendet"
    )

    const theTime = <Moment format="HH:mm" >{service.datetime}</Moment>;
    
    return (
      <div className="col-md-6 col-md-offset-3">
        <form name="form" className="BasicForm" onSubmit={this.handleSubmit}>
        <h5> Hantera {this.type}</h5>
      <hr />
        {service.company_name ?
        <div>
          <p> Kund: {service.company_name} </p>
          <p> Kontaktperson: {service.con_pers} </p>
        </div>
        : <p> Kund: {service.con_pers} </p>}
          <p> tel: {service.con_tel} </p>
          <p> datum: <Moment format="DD/MM" >{service.datetime}</Moment></p>
          <p> tid: <Moment format="HH:mm" >{service.datetime}</Moment></p>
          {/* {this.photos.map(photo => {
            <img src={photo} />
            console.log(photo)
          })} */}
          <div className="form-group">
            <div className="BasicForm__check">
              <textarea
                rows="5"
                type="text"
                className="BasicForm__textArea"
                name="description"
                placeholder="Detaljerad beskrivning av ärendet"
                value={this.description}
                onChange={this.handleChange}
              />
              {this.description && <i className="fas fa-check BasicForm__check" />}
            </div>
            {submitted &&
              !this.description && (
                <div className="help-block">
                  Glöm inte att beskriva ärendet!
                </div>
              )}
          </div>
          <p className="BasicForm__ChangeTime">Byte av datum eller tid</p>
          <DateTimePhoto admin={admin} />
          <div className="form-group">
            <MultipleSelect />
            {submitted &&
              !employee && (
                <div className="help-block">
                  Glöm inte att tilldela ärendet till rätt person
                </div>
              )}
          </div>
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

export default connect(mapStateToProps)(HandleService);
