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
    this.props.dispatch(fetchEmployees(token));
  }

  render() {

    const { employees, isFetching } = this.props;

    if(isFetching) {
      return <i class="fas fa-circle-notch fa-spin"></i>;
    }
    
    return (
      employees ?
      <div className="BasicList__container">
        <h4> Anställda </h4>
        <ul className="BasicList__list">
          {employees.map(employee => (
          <li key={employee.id}>
            <Link to={`/admin/accounts/employees/${employee.id}`}>
              <div className="edit">
                <p> {employee.name} </p>
                <i className="fas fa-cog"></i>
              </div>
            </Link>
          </li>
          ))}
        </ul>
      </div>
      : (
        <div className="BasicList__container inner">
          <h4>Anställda</h4>
          <p>Inga användare att visa</p>
        </div>  
      )
    )
  }
}

const mapStateToProps = state => ({ 
  employees: state.adminAccounts.employees,
  isFetching: state.adminAccounts.isFetching 
});

export default withRouter(connect(mapStateToProps)(EmployeeList));
