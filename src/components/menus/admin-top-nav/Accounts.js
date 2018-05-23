import React, { Component } from 'react'
import Cookies from 'universal-cookie';
import $ from 'jquery'; 

import { withRouter } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'
import './style.css'


class AdminTopAccounts extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        openAccounts: false
      }
  
      this.openMenuAccounts = this.openMenuAccounts.bind(this);
      this.logOut = this.logOut.bind(this);
    }

    componentDidMount(event) {
      let width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      if(width > '800') {
        this.setState({ openServices: true })
      } else {
        this.setState({ openServices: false })
      }
      let btn = $('.services__press');
      let icon = $('i');
      $(btn).click(function() {
        if(icon.hasClass('fa-bars')){
          $('.fa-bars').addClass('fa-times');
          $('.fa-bars').removeClass('fa-bars');
        }
        else {
          $('.fa-times').addClass('fa-bars');
          $('.fa-times').removeClass('fa-times');
        }
      });
    }

    openMenuAccounts(event) {
        event.preventDefault();
        if (this.state.openAccounts === true) {
          this.setState({ openAccounts: false })
        } else {
          this.setState({ openAccounts: true })
        }
      }

      logOut(event){
        const cookies = new Cookies();
        cookies.remove("token")
      }

      render() {


        const { openAccounts } = this.state;
        return (
    
          <div>
            <button className="slide-menu__press accounts__press" onClick={this.openMenuAccounts}>
                <i className="fas fa-users"></i>
             </button>
          <Menu right isOpen={openAccounts} customBurgerIcon={ false } noOverlay className="slide-menu accounts" width={'100%'}>
          <h3 className="slide-menu__header2">Konton</h3>
        <a id="create" className="menu-item2" href={`/admin/accounts/create`}>
            Skapa ny användare
          <i className="fas fa-plus slide2"></i>
          </a>
          <a id="employees" className="menu-item2" href={`/admin/accounts/employees`}>
            Anställda
          <i className="fas fa-users slide2"></i>
          </a>
          <a id="create" className="menu-item2" href={`/admin/accounts/customers/create`}>
            Lägg till ny Kund
          <i className="fas fa-plus slide2"></i>
          </a>
          <a id="privateCustomers" className="menu-item2" href={`/admin/accounts/customers/private`}>
            Privatkunder
          <i className="fas fa-user slide2"></i>
          </a>
          <a id="companies" className="menu-item2" href={`/admin/accounts/customers/companies`}>
            Företagskunder
            <i className="fas fa-industry slide2"></i>
          </a>
          <a id="myProfile" className="menu-item2" href={`/admin/accounts/profile`}>
            Min profil
            <i className="fas fa-user-circle slide2"></i>
          </a>
        </Menu>  
      </div>
    );
  }
}

export default withRouter(AdminTopAccounts);