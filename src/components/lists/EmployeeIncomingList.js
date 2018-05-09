import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchEmpIncoming } from '../../redux/actions/employees';
import { Link, withRouter } from "react-router-dom";

import './style.css'

const mapStateToProps = state => ({
  incomingList: state.employee.empIncomingList
});

class IncomingJobsList extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    this.props.dispatch(fetchEmpIncoming(2));
    console.log(this.props.incomingList);
  }

  render() {
    const  {isFetching, incomingList } = this.props;
      console.log(incomingList);

    if(isFetching) {
      return (
        <div>
        loading....
        </div>
      );
  }

    const List =  incomingList.map((list) => 
    <div>
      <li>
        <Link to={`/employee/orders/${list.employee_services.serviceId}`}>
          <div className="edit">
            <p>{list.employee_services.serviceId}</p>
            <p>Kund: {list.con_pers}</p>
            <p>datum: {list.datetime}</p>
            <p className="IncomingJobAccept">Info</p>
          </div>
          </Link>
      </li>
      <hr />
    </div>
    );

    return (
      <div className="BasicList__container">
        <h5> Inkomna Jobb</h5>
        <p> Här samlas alla dina inkomna jobb. Klicka på ärendet för 
            att få mer detaljer och bekräfta att du påbörjat jobbet när 
            du har anlänt till kunden med knappen "Påbörja jobb". </p>
        <hr />
        <ul className="BasicList__list">
          {List}
        </ul>
      </div>
    );
  }
}



export default connect(mapStateToProps)(IncomingJobsList);