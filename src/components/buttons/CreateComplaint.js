import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.css'

export default class CreateComplaint extends Component {
    render() {  
      return (
        <Link to={`/admin/orders/complaints/add`} >
          <button className="add">Lägg till reklamation</button>
        </Link>  
      );
    }

}