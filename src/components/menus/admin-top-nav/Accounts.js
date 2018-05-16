import React, { Component } from 'react'

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
    }

    openMenuAccounts(event) {
        event.preventDefault();
        if (this.state.openAccounts === true) {
          this.setState({ openAccounts: false })
        } else {
          this.setState({ openAccounts: true })
        }
      }


      render() {

        const { openAccounts } = this.state;
        return (
    
          <div>
            <button className="slide-menu__press" onClick={this.openMenuAccounts}>
                <i className="fas fa-users"></i>
             </button>
          <Menu right isOpen={openAccounts} customBurgerIcon={ false } noOverlay className="slide-menu accounts" width={'70%'}>
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
        <a id="logout" className="menu-item2" href={`/logout`}>
          Logga ut
          <i className="fas fa-sign-out-alt slide2" />
        </a>
        </Menu>  
      </div>
    );
  }
}

export default withRouter(AdminTopAccounts);