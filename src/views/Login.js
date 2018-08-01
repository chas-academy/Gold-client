import React, { Component } from 'react'
import { SignIn, SignUp} from '../components'
import { Tabs, TabContent, TabLink } from 'react-tabs-redux'

import img from '../assets/img/Slice1.png'
import './style.css'

export default class Login extends Component {

    render() {
      return (    
      <div className="sign-in__container">      
      <h3 className="sign-in__logo__line1"><img src={img} className="sign-in__logo__img" alt="logotype"/> Servicebyråns</h3>
      <h3 className="sign-in__logo__line2">ärendehanteringssystem</h3>
        <div className="form-container">
          <Tabs>
            <div className="sign-in__tabs">
              <TabLink className="sign-in__tabs__link" to="signin">Logga in</TabLink>
              <TabLink className="sign-in__tabs__link" to="signup">Skapa konto</TabLink>
            </div>  
              <TabContent for="signin"><SignIn/></TabContent>
              <TabContent for="signup"><SignUp/></TabContent>
        </Tabs>
        </div>
        </div>
      )
  }

}
  

