import React, { Component } from 'react';
import { SignIn, SignUp} from '../components';
import { Tabs, TabContent, TabLink } from 'react-tabs-redux';

import img from './../assets/img/Slice1.png'

export default class Login extends Component {

    render() {
      return (  
        <div>
          <div className="col-md-6 col-md-offset-3">
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
          <img src={img} className="login" height={50} />
        </div>
      )
  }

}
  

