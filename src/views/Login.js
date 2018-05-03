import React, { Component } from 'react';
import { SignIn, SignUp} from '../components';
import { Tabs, TabContent, TabLink } from 'react-tabs-redux';

import img from '../assets/img/Slice1.png'

export default class Login extends Component {

    render() {
      return (          
      <div className="col-md-6 col-md-offset-3">

      <h3 className="Login__header1"><img src={img} className="Login__img" height={50} /> Servicebyråns</h3>
      <h3 className="Login__header2"> ärendehanteringssystem</h3>
        <div className="form-container">
          <Tabs>
            <div className="link-group">
              <TabLink className="signin-link" to="signin">Logga in</TabLink>
              <TabLink className="signin-link" to="signup"  >Skapa konto</TabLink>
            </div>  
              <TabContent for="signin"><SignIn/></TabContent>
              <TabContent for="signup"><SignUp/></TabContent>
        </Tabs> 
        </div>
        </div>
      )
  }

}
  

