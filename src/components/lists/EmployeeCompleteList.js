import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchEmpFinished } from '../../redux/actions/employees';
import { withRouter, Link } from "react-router-dom";
import Cookies from "universal-cookie";
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
    const cookies = new Cookies();
    var token = cookies.get("token");
    this.props.dispatch(fetchEmpFinished(2,token));
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


    // if status = completed and user_id = user.id
    return (
      orders ?
      <div className="BasicList__container">
        <h4> Slutförda Jobb</h4>
        <p> Här kan du se dina slutförda jobb.</p>
        <hr />
        <ul className="BasicList__list">
           {finishList}
        </ul>
      </div>
      : (
        <div className="BasicList__container inner">
        <h4> Slutförda jobb </h4>
        <p>Inga slutförda jobb att visa</p>
      </div>  
      )
    );
  }
}


const mapStateToProps = state => ({ 
});

export default withRouter(connect(mapStateToProps)(EmployeeCompleteList));
