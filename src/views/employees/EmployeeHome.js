import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { fetchAssigned } from "../../redux/actions/employees";
import Cookies from "universal-cookie";

import "./style.css";

class EmployeeHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: ''
    }

    this.logOut = this.logOut.bind(this);
  }

  logOut(event){
    const cookies = new Cookies();
    cookies.remove("token")
  }

  componentDidMount() {

    const cookies = new Cookies();
    var token = cookies.get("token");
    
    if (token) {
      const user = JSON.parse(
        window.atob(
          token
            .split(".")[1]
            .replace("-", "+")
            .replace("_", "/")
        ))

        this.setState({ userName: user.name })
        this.props.dispatch(fetchAssigned(user.id, token));

    }

  }

  render() {
    const { Assigned } = this.props;

    const newOrders = Assigned.filter(order => order.order_type === "order");
    const newComplaints = Assigned.filter(order => order.order_type === "complaint");
    const newInternal = Assigned.filter(order => order.order_type === "int_order");


    const { userName } = this.state;

    return (
      <div>
        <div className="CustomerHome__menu">
          <h3 className="CustomerHome__welcome">Välkommen {userName}!</h3>
          <div>
            <button className="CustomerHome__buttons">
              <Link to={`/employee/incoming`} >
                {newOrders.length > 0 || newComplaints.length > 0  ? 
                <i className="fas fa-compass employeeNew" />
                : 
                <i className="fas fa-compass" />}
                <p className="CustomerHome__buttonText"> Inkomna Jobb</p>
              </Link>
            </button>
            <button className="CustomerHome__buttons">
              <Link to={`/employee/internal`}>
              {newInternal.length > 0 ?
                <i className="far fa-check-circle employeeNew" />
                : 
                <i className="far fa-check-circle" />}
                <p className="CustomerHome__buttonText">
                  Interna ärenden
                </p>
              </Link>
            </button>
          </div>
          <div>
            <button className="CustomerHome__buttons">
              <Link to={`employee/history`}>
                <i className="fas fa-history" />
                <p className="CustomerHome__buttonText">Ärendehistorik</p>
              </Link>
            </button>
            <button className="CustomerHome__buttons">
              <Link to={`employee/profile`}>
                <i className="fas fa-user-circle" />
                <p className="CustomerHome__buttonText"> Redigera profil</p>
              </Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  Assigned: state.employee.Assigned,
});

export default withRouter(connect(mapStateToProps)(EmployeeHome));
