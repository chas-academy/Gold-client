import React, { Component } from 'react'
import Cookies from 'universal-cookie';

import { withRouter } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'
import './style.css'


class AdminTopAccounts extends Component {
  constructor(props) {
    super(props);
    this.state = { openAccounts: false }
    this.openMenuAccounts = this.openMenuAccounts.bind(this);
    this.logOut = this.logOut.bind(this);
  }


  openMenuAccounts(event) {
    event.preventDefault();

    this.state.openAccounts === true ?
      this.setState({ openAccounts: false })
    : this.setState({ openAccounts: true })
  }

  logOut(event){
    const cookies = new Cookies();
    cookies.remove("token")
  }

  render() {
    const { openAccounts } = this.state;
    
    return (
      <div>
        <button className="slide-menu__icon-top accounts__press" onClick={this.openMenuAccounts}>
          <i className="fas fa-users"></i>
        </button>

        <Menu right isOpen={openAccounts} customBurgerIcon={ false } className="slide-menu accounts" width={'40vh'}>
        <h3 >Hantera användare</h3>
          <a id="create"  href={`/admin/accounts/create`}>
            Ny Anställd/admin
          <i className="fas fa-plus"></i>
          </a>
          <a id="employees"  href={`/admin/accounts/employees`}>
            Anställda
          <i className="fas fa-users"></i>
          </a>
          <a id="create"  href={`/admin/accounts/customers/create`}>
            Ny Kund
          <i className="fas fa-plus"></i>
          </a>
          <a id="privateCustomers" href={`/admin/accounts/customers/private`}>
            Privatkunder
          <i className="fas fa-user"></i>
          </a>
          <a id="companies" href={`/admin/accounts/customers/companies`}>
            Företagskunder
            <i className="fas fa-industry"></i>
          </a>
          <a id="myProfile" href={`/admin/accounts/profile`}>
            Min profil
            <i className="fas fa-user-circle"></i>
          </a>
          <a id="logout" href={`/logout`} onClick={this.logOut}>
            Logga ut
            <i className="fas fa-sign-out-alt" />
          </a>
        </Menu>  
      </div>
    ) 
  }
}

export default withRouter(AdminTopAccounts);