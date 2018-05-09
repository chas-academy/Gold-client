import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchEmpIncoming } from '../../redux/actions/employees';
import { Link, withRouter } from "react-router-dom";

import './style.css'

const mapStateToProps = state => ({
  empIncomingList: state.employee.IncomingJobsList
});

class IncomingJobsList extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    this.props.dispatch(fetchEmpIncoming(2));
    console.log(this.props.IncomingJobsList);
  }

  render() {
    const  {isFetching, empIncomingList } = this.props;


    if(isFetching) {
      return (
        <div>
        loading....
        </div>
      );
  }

  
    const jobId = 1;
    const jobId2 = 2;
    return (
      <div className="BasicList__container">
        <h5> Inkomna Jobb</h5>
        <p> Här samlas alla dina inkomna jobb. Klicka på ärendet för 
            att få mer detaljer och bekräfta att du påbörjat jobbet när 
            du har anlänt till kunden med knappen "Påbörja jobb". </p>
        <hr />
        <ul className="BasicList__list">
           {/* {
             empIncomingList.map((listItem) => {
               <p>{listItem}</p>
             })
           } */}
          <li>
            <Link to={`/employee/orders/${jobId}`}>
              <div className="edit">
                <p>Kund: XXXXX</p>
                <p>datum: XXXX</p>
                <p className="IncomingJobAccept">Info</p>
              </div>
            </Link>
          </li>
          <hr />
          <li>
            <Link to={`/employee/orders/${jobId2}`}>
              <div className="edit">
              <p>Kund: XXXXX</p>
              <p>datum: XXXX</p>
                <p className="IncomingJobAccept">Info</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}



export default connect(mapStateToProps)(IncomingJobsList);