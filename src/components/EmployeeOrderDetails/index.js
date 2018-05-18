import React, { Component } from "react";
import { connect } from "react-redux";
import "./style.css";
import { fetchService } from "../../redux/actions/employees";
import Cookies from "universal-cookie";
import Moment from "react-moment";

import { EmployeeConfirmJob, EmployeeCompleteJob } from "../../components";
import AddPhotos from "../buttons/AddPhotos";

class EmployeeOrderDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
      
    this.props.dispatch(fetchService(token, this.state.id));
  }

  render() {
    const { service } = this.props;

    return (
  <div className="BasicList__container">    

    {service.order_type === 'order' ?
    <div className="EmployeeOrderDetails">
          <ul className="BasicList__list orderDetails">
            <li>
              {service.company_name ?
              <h3>{service.company_name}</h3>
              : <h3>{service.con_pers}</h3>
            }
              <hr/>
            </li>
            <li><Moment format="DD/MM  HH:MM">{service.datetime}</Moment></li>
            <li>Adress: {service.order.address}</li>
            <hr/>
            <li>Beskrivning: {service.order.description} </li>
            <hr/>

            <li>Foton</li>
          </ul>
            <div>
              <div className="employee__addPhoto">
                <AddPhotos />
              </div>  
            <EmployeeCompleteJob />
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
