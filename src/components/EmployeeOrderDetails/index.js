import React, { Component } from "react";
import { connect } from "react-redux";
import "./style.css";
import { fetchService } from "../../redux/actions/employees";
import { fetchServiceComplete } from "../../redux/actions/employees";
import Cookies from "universal-cookie";
import Moment from "react-moment";

import { EmployeeConfirmJob, EmployeeCompleteJob } from "../../components";
import AddPhotos from "../buttons/AddPhotos";

class EmployeeOrderDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errorMessage: "",
      id: this.props.id
    }
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
    
    this.setState({ token: token })
      
    this.props.dispatch(fetchService(token, this.state.id));
  }

  completeJob(e) {
    e.preventDefault()
    this.props.dispatch(fetchServiceComplete(this.state.token, this.state.id))
    .then((res) => {
      if (res.type == "FETCH_SERVICE_COMPLETE_SUCCESS") {
        this.props.history.push("/employee/incoming")
      } else {
        console.log(res)
        this.setState({ errorMessage: res.payload })
      }
    })
  }

  render() {
    const { errorMessage } = this.state
    const { service } = this.props;

    return (
  <div className="BasicList__container">    
    {service.order_type === 'order' ?
    <div className="EmployeeOrderDetails">
          <ul className="BasicList__list orderDetails">
            <li>
            <h2 className="Order_header">Beställning</h2>
              {service.company_name ?
              <h3>{service.company_name}</h3>
              : <h3>{service.con_pers}</h3>
            }
              <hr/>
            </li>
            <li>Åtgärdas: <Moment format="DD/MM  HH:mm">{service.datetime}</Moment></li>
            <li>Adress: {service.order.address}</li>
            <hr/>
            <li>Beskrivning: {service.order.description} </li>
            <hr/>
              <div className="employee__addPhoto">
                <AddPhotos />
              </div>  
          </ul>
            <div>
            <EmployeeCompleteJob completeJob={this.completeJob.bind(this)} />
            {errorMessage && <div className="help-block">{errorMessage}</div>}
            </div>

        </div>
        : 
        service.order_type === 'complaint' ?
        <div className="EmployeeOrderDetails">
          <ul className="BasicList__list orderDetails">
            <li>
              <h2 className="Complaint_header">Reklamation</h2>
              {service.company_name ?
              <div>
                <h3>{service.company_name}</h3>
                <h5>Kontaktperson: {service.con_pers}</h5>
              </div>
              : <h3>{service.con_pers}</h3>
            }
              <hr/>
            </li>
            <li>Åtgärdas: <Moment format="DD/MM  HH:mm">{service.datetime}</Moment></li>
            <li>Adress: {service.complaint.order.address}</li>
            <hr/>
            <li>Beskrivning: {service.complaint.description} </li>
            <hr/>

              <div className="employee__addPhoto">
                <AddPhotos />
              </div>  
          </ul>
            <div>
            <EmployeeCompleteJob completeJob={this.completeJob.bind(this)} />
            {errorMessage && <div className="help-block">{errorMessage}</div>}
            </div>

        </div>
        : ('')}
        </div>
    );
  }
}

const mapStateToProps = state => ({
  service: state.employee.service
});

export default connect(mapStateToProps)(EmployeeOrderDetails);
