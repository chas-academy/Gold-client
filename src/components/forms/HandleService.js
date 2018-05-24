import React, { Component } from "react";
import { connect } from "react-redux";
import Cookies from "universal-cookie";
import { fetchService } from "../../redux/actions/admin/Orders";
import { fetchServicesHandle } from "../../redux/actions/admin/Orders";
import Moment from "react-moment";
import moment from "moment";

import { DateTimePhoto, MultipleSelect } from "../../components";

import "./style.css";

class HandleService extends Component {
  constructor(props) {
    super(props);

    this.state = {
      admin: true,
      submitted: "",
      successMessage: "",
      errorMessage: "",
      message: "",
      date: null,
      time: null,
      description: null,
      employees: [],
      id: this.props.id,
      token: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.delete = this.delete.bind(this);
  }

  componentWillMount() {
    const cookies = new Cookies();
    var token = cookies.get("token");
    this.setState({ token: token });
    this.props.dispatch(fetchService(token, this.state.id));
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    this.props.service.order.description = value;
  }

  handleSubmit(event) {
    event.preventDefault();

    const form = {
      date: this.state.date,
      time: this.state.time,
      description: this.state.description,
      employees: this.state.employees
    };

    if (this.state.employees.length > 0) {
      this.props
        .dispatch(fetchServicesHandle(this.state.token, this.state.id, form))
        .then(res => {
          if (res.type === "SERVICE_HANDLE_SUCCESS") {
            this.setState({ successMessage: res.payload });
            this.setState({ errorMessage: '' });
          } else {
            this.setState({ errorMessage: res.payload });
          }
        });
    }

    this.setState({ submitted: true });
  }

  getDate(date) {
    this.setState({ date: date });
  }

  getTime(time) {
    this.setState({ time: time });
  }

  getEmps(emps) {
    this.setState({ employees: emps });

    this.state.date === null
      ? this.setState({
          date: moment(this.props.service.datetime).format("Y-MM-DD")
        })
      : "";

    this.state.time === null
      ? this.setState({
          time: moment(this.props.service.datetime).format("HH:mm")
        })
      : "";

    if (this.props.service.order) {
      this.state.description == null
        ? this.setState({ description: this.props.service.order.description })
        : "";
    } else if (this.props.service.int_order) {
      this.state.description == null
        ? this.setState({
            description: this.props.service.int_order.description
          })
        : "";
    } else if (this.props.service.complaint) {
      this.state.description == null
        ? this.setState({
            description: this.props.service.complaint.description
          })
        : "";
    }
  }

  delete(event) {
    event.preventDefault();
  }

  render() {
    const {
      admin,
      employees,
      submitted,
      successMessage,
      errorMessage
    } = this.state;

    const { service } = this.props;

    if (service.order) {
      this.type = "Beställning";
      this.description = service.order.description;
      this.photos = service.order.image_path;
    } else if (service.internal_order) {
      this.type = "Internt ärende";
      this.description = service.internal_order.description;
      this.photos = service.internal_order.image_path;
    } else if (service.complaint) {
      this.type = "Reklamation";
      this.description = service.complaint.description;
    } else this.description = "Ingen beskrivning av ärendet";

    return (
      <div>
        <form name="form" className="BasicForm" onSubmit={this.handleSubmit}>
          <h5 className="handle_header"> Hantera {this.type}</h5>
          {service.status == "new" ? (
            <h5 className="handle_status">
              <strong>Status:</strong> Nytt
            </h5>
          ) : service.status == "assigned" ? (
            <h5 className="handle_status">
              <strong>Status:</strong> Hanterat
            </h5>
          ) : service.status == "done" ? (
            <h5 className="handle_status">
              <strong>Status:</strong> Avslutat
            </h5>
          ) : (
            ""
          )}
          {service.company_name ? (
            <div>
              <hr />
              <h5 className="handle_header"> {service.company_name} </h5>
              <h5 className="handle_header"> Kontaktperson {service.con_pers} </h5>
            </div>
          ) : (
            <h5 className="handle_header"> {service.con_pers} </h5>
          )}
          <hr />
          <p>
            {" "}
            Tel: <a href={`tel:${service.con_tel}`}> {service.con_tel} </a>{" "}
          </p>
          <p>
            {" "}
            Önskat datum:{" "}
            <Moment format="YYYY-MM-DD">{service.datetime}</Moment>
          </p>
          <p>
            {" "}
            Önskad tid: <Moment format="HH:mm">{service.datetime}</Moment>
          </p>
          {/* {this.photos.map(photo => {
            <img src={photo} />
            console.log(photo)
          })} */}
          <div className="form-group">
            <textarea
              rows="5"
              type="text"
              className="BasicForm__textArea"
              name="description"
              placeholder="Detaljerad beskrivning av ärendet"
              value={this.description}
              onChange={this.handleChange}
            />
            {submitted &&
              !this.description && (
                <div className="help-block">
                  Glöm inte att beskriva ärendet!
                </div>
              )}
          </div>
          <hr />
          {service.status === "done" ? (
            <ul className="employees_list">
              <li>Ärende avslutat av: </li>
              {service.employees.map(employee => <li>{employee.name}</li>)}
            </ul>
          ) : (
            <div>
              <h5 className="handle_header">Ändra datum eller tid</h5>
              <DateTimePhoto
                admin={admin}
                getDate={this.getDate.bind(this)}
                getTime={this.getTime.bind(this)}
              />
              <div className="form-group">
                {service.status == "assigned" ? (
                  <div>
                    <ul className="employees_list">
                      <li>Ärende tilldelat: </li>
                      {service.employees.map(employee => (
                        <li>{employee.name}</li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  ""
                )}
                <MultipleSelect getEmps={this.getEmps.bind(this)} />
                {submitted &&
                  !employees && (
                    <div className="help-block">
                      Glöm inte att tilldela ärendet till rätt person
                    </div>
                  )}
              </div>
            </div>
          )}

          <div className="buttons">
            <div className="form-group">
              {service.status === "assigned" ? (
                <button type="submit" className="btn btn-primary">
                  Uppdatera ärende
                </button>
              ) : service.status === "done" ? (
                ""
              ) : (
                <button type="submit" className="btn btn-primary">
                  Skicka ärende till anställd
                </button>
              )}
              {errorMessage && <div className="help-block">{errorMessage}</div>}
              {successMessage && (
                <div className="help-block">{successMessage}</div>
              )}
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

const mapStateToProps = dispatch => ({
  service: dispatch.adminOrders.service,
  successMessage: dispatch.adminOrders.successMessage
});

export default connect(mapStateToProps)(HandleService);
