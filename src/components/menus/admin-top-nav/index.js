import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
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
        <h3 className="slide-menu__press"> <i className="fas fa-bars"></i></h3>
      <div>
      <Menu className="slide-menu" width={'75%'} isOpen={ true } disableOverlayClick disableCloseOnEsc noOverlay >
        <h3 className="slide-menu__header">Ärenden</h3>
          <a id="incoming" className="menu-item" href={`/admin/orders/incoming`}>                
            <i className="fas fa-inbox slide"></i>
            Nya
          </a>
          <a id="active" className="menu-item" href={`/admin/orders/active`}>
          < i className="fas fa-clock slide"></i>
            Pågående
          </a>
          <a id="internal" className="menu-item" href={`/admin/orders/internal`}>
            <i className="fas fa-envelope-open slide"></i>
            Interna</a>
          <a id="complaints" className="menu-item" href={`/admin/orders/complaints`}>
            <i className="fas fa-exclamation-triangle slide"></i>
            Reklamationer</a>
          <a id="completed" className="menu-item" href={`/admin/orders/completed`}>
            <i className="fas fa-history slide"></i>
            Avslutade
          </a> 
        <h3 className="slide-menu__header">Konton</h3>
          <a id="incoming" className="menu-item" href={`/admin/accounts/employees`}>
          <i className="fas fa-users slide"></i>
            Anställda
          </a>
          <a id="active" className="menu-item" href={`/admin/accounts/customers/private`}>
          <i className="fas fa-user slide"></i>
            Privatkunder
          </a>
          <a id="internal" className="menu-item" href={`/admin/accounts/customers/companies`}>
            <i className="fas fa-industry slide"></i>
            Företagskunder
          </a>
          <a id="complaints" className="menu-item" href={`/admin/accounts/profile`}>
            <i className="fas fa-user-circle slide"></i>
            Min profil
          </a>
        <a id="logout" className="slide-menu__header slide-logout" href={`/logout`}>
          <i className="fas fa-sign-out-alt slide" />
          Logga ut
        </a>

        </Menu>  
      </div>
      </div>
    );
  }
}

export default withRouter(AdminTopNav);
