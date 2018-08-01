import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchEmployees } from "../../redux/actions/admin/Accounts";
import Cookies from "universal-cookie";
import { AddUser } from '../../components';
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
      return (
        <div className="spinner">
          <i className="fas fa-circle-notch fa-spin"></i>
        </div>
      )  
    }
    
    return (
      employees ?
      <div className="BasicList__container">
        <h4> Anställda </h4>
        <ul className="BasicList">
          <li>
            <AddUser />
          </li>
          {employees.map(employee => (
          <li key={employee.id}>
            <Link to={`/admin/accounts/employees/${employee.id}`}>
              <div className="BasicList__edit">
                <p> {employee.name} </p>
                <i className="fas fa-cog fa-spin"></i>
              </div>
            </Link>
            <hr />
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
