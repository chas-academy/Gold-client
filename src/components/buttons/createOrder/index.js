import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../style.css'

export default class CreateOrder extends Component {
    render() {  
      return (
        <Link to={`/admin/orders/add`} >
          <button className="add">Lägg till ärende</button>
        </Link>  
      );
    }

}