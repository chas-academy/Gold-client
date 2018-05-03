import React, { Component } from 'react';
import { SignUp } from '../components'

export default class Login extends Component {

    render() {
      return (  
        <div> 
            <h3>Registrera</h3>
          <SignUp />
        </div>
      )
  }

}