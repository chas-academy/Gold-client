import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchEmployees } from "../../redux/actions/admin/Accounts";
import Cookies from "universal-cookie";

import { Link, withRouter } from "react-router-dom";
import './style.css'

class EmployeeList extends Component {

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

    this.props.dispatch(fetchEmployees(token));
  }

  render() {

    const { employees } = this.props;

    // if type === employee
    console.log(employees);

    return (
      employees ?
      <div className="BasicList__container">
        <h4> Anställda </h4>
        <ul className="BasicList__list">
          {/* {users.map(order => (
          <li key={user.id}>
            <Link to={`/admin/userss/${user_id}`}>
              <div className="edit">
                <p> {user.name} </p>
                <i className="fas fa-edit" />
              </div>
            </Link>
          </li>
          ))} */}
        </ul>
      </div>
      : (
        <div className="BasicList__container">
          <h4>Anställda</h4>
          <p>Inga användare att visa</p>
        </div>  
      )
    )
  }
}

const mapStateToProps = state => ({ 
  employees: state.adminAccounts.employees, 
});

export default withRouter(connect(mapStateToProps)(EmployeeList));
