import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../style.css'

export default class CreateUser extends Component {
    render() {  
      return (
        <Link to={`/admin/accounts/add`} >
          <button className="add">Lägg till användare</button>
        </Link>  
      );
    }

}