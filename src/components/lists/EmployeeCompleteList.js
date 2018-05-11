import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchEmpFinished } from '../../redux/actions/employees';
import { withRouter, Link } from "react-router-dom";
// import { Tabs, TabContent, TabLink } from 'react-tabs-redux';

import './style.css'

const mapStateToProps = state => ({
  completedList: state.employee.empFinishedList,
  isFetching: state.employee.isFetching
});

class EmployeeCompleteList extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    this.props.dispatch(fetchEmpFinished(2));
    console.log(this.props.completedList);
  }
  render() {
    const  {isFetching, completedList } = this.props;
    console.log(completedList);

  if(isFetching) {
    return (
      <div>
      loading....
      </div>
    );
}

const finishList =  completedList.map((complete) => 
<div>
  <li>
    <Link to={`/employee/orders/${complete.employee_services.serviceId}`}>
      <div className="edit">
        <p>{complete.employee_services.serviceId}</p>
        <p>Kund: {complete.con_pers}</p>
        <p>datum: {complete.datetime}</p>
        <p className="IncomingJobAccept">Info</p>
      </div>
      </Link>
  </li>
  <hr />
</div>
);

    return (
      <div className="BasicList__container">
        <h4> Avslutade Jobb</h4>
        <p> Här kan du se dina slutförda jobb.</p>
        <hr />
        <ul className="BasicList__list">
           {finishList}
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps)(EmployeeCompleteList);