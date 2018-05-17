import React, { Component } from "react";
import { connect } from "react-redux";
import "./style.css";
import { fetchService } from "../../redux/actions/employees";
import Cookies from "universal-cookie";

import { EmployeeConfirmJob, EmployeeCompleteJob } from "../../components";
// import AddPhotos from "../buttons/AddPhotos";

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

    console.log(service);

    return (
  <div className="BasicList__container">    

    <div className="EmployeeOrderDetails">
          <ul className="BasicList__list orderDetails">
            <li>
              <h3>Kund</h3>
            </li>
            <li>Datum</li>
            <li>Adress</li>
            <li>beskrivning</li>
            <li>Foton</li>
            <li>Anställd som bekräftar</li>
          </ul>
            <div>
              {/* <div className="orderDetails">
          <AddPhotos />
        </div>   */}
            <EmployeeCompleteJob />
            </div>

        </div>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  service: state.employee.service
});

export default connect(mapStateToProps)(EmployeeOrderDetails);
