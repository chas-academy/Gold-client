import React, { Component } from "react";
import { connect } from "react-redux"
import { withRouter, Link } from "react-router-dom";
import { EmployeeOrderDetails } from '../../components'
import Cookies from "universal-cookie";

import "./style.css";


class EmployeeActiveList extends Component {
  constructor(props) {
    super(props);
    this.state = {}
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
      ));
  }

  render() {
    const  {isFetching, Taken } = this.props;

    if(isFetching) {
      return <i className="fas fa-circle-notch fa-spin"></i>
    }

    const ongoingList =  Taken.map((active) => 
    <div>
      <li>
        <Link to={`/employee/orders/${active.employee_services.serviceId}`}>
          <div className="edit">
            <p>{active.employee_services.serviceId}</p>
            <p>Kund: {active.con_pers}</p>
            <p>datum: {active.datetime}</p>
            <p className="IncomingJobAccept">Info</p>
          </div>
          </Link>
      </li>
      <hr />
    </div>
    );


    return (
      <div className="BasicList__container">
        <h4> Slutför Jobb</h4>
        <p> När du klickar på slutför jobb så skickas 
          en bekräftelse till kunden med tidpunkt och foton. </p>
        <hr />
        <ul className="BasicList__list">
          {ongoingList}
          {/* <li>
            <EmployeeOrderDetails Ongoing={true}/>
          </li> */}
        </ul>  
      </div>    
    );
  }
}

const mapStateToProps = state => ({
  Taken: state.employee.Taken,
  isFetching: state.employee.isFetching
});

export default connect(mapStateToProps)(EmployeeActiveList);
