import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.css'

export default class CreateInternalOrder extends Component {
    render() {  
      return (
        <Link to={`/admin/orders/internal/add`} >
          <button className="add">Skapa internt ärende </button>
        </Link>  
      );
    }

}