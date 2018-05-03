import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../style.css'

export default class EmployeeCompleteJob extends Component {
    render() {  
      return (
        // <Link to={`/Employee/${employee_id}/add`} >
        <div>
          <button className="add">Konfirmera Jobb</button>
        </div>
         
      );
    }

}