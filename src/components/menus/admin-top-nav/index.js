import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { NavDropdown, MenuItem }from 'react-bootstrap'

import { slide as Menu } from 'react-burger-menu'
import './style.css'

class AdminTopNav extends Component {
  
  showSettings (event) {
    event.preventDefault();

  }

  // var isMenuOpen = function(state) {
  //   return state.isOpen;
  // };
  
  // <Menu onStateChange={ isMenuOpen } />

  render() {
    return (

      <div>
        <h3 className="slide-menu__press"> Hantera konton och ärenden </h3>
      <div>
      <Menu className="slide-menu" width={'85%'}>
        <h3 className="slide-menu__header">Ärenden</h3>
          <a id="incoming" className="menu-item" href={`/admin/orders/incoming`}>Nya</a>
          <a id="active" className="menu-item" href={`/admin/orders/active`}>Pågående</a>
          <a id="internal" className="menu-item" href={`/admin/orders/internal`}>Interna</a>
          <a id="complaints" className="menu-item" href={`/admin/orders/complaints`}>Reklamationer</a>
          <a id="completed" className="menu-item" href={`/admin/orders/completed`}>Avslutade</a> 
        <h3 className="slide-menu__header">Konton</h3>
          <a id="incoming" className="menu-item" href={`/admin/accounts/employees`}>Anställda</a>
          <a id="active" className="menu-item" href={`/admin/accounts/customers/private`}>Privatkunder</a>
          <a id="internal" className="menu-item" href={`/admin/accounts/customers/companies`}>Företagskunder</a>
          <a id="complaints" className="menu-item" href={`/admin/accounts/profile`}>Min profil</a>
          <a id="completed" className="menu-item" href={`/admin/orders/completed`}>Avslutade</a>  
        </Menu>  
      </div>
      </div>
    );
  }
}

export default withRouter(AdminTopNav);
