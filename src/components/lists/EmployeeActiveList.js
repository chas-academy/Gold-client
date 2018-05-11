import React, { Component } from "react";
import { connect } from "react-redux"
import { fetchEmpActive } from '../../redux/actions/employees';
import { withRouter, Link } from "react-router-dom";
import { EmployeeOrderDetails } from '../../components'

import "./style.css";

const mapStateToProps = state => ({
  activeList: state.employee.empActiveList,
  isFetching: state.employee.isFetching
});

class EmployeeActiveList extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    this.props.dispatch(fetchEmpActive(2));
    console.log(this.props.activeList);
  }

  render() {
    const  {isFetching, activeList } = this.props;

    const ongoingList =  activeList.map((active) => 
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

export default connect(mapStateToProps)(EmployeeActiveList);
