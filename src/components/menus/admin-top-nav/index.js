import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'
import './style.css'
import logo from '../../../assets/img/Slice1.png'

class AdminTopNav extends Component {
  
  showSettings (event) {
    event.preventDefault();
  }

  constructor(props) {
    super(props);

    this.state = {
      open: false
    }

    this.openMenu = this.openMenu.bind(this);
  }

openMenu(event) {
  event.preventDefault();
  if (this.state.open === true) {
    this.setState({ open: false })
  } else {
    this.setState({ open: true })
  }
}

  // var isMenuOpen = function(state) {
  //   return state.isOpen;
  // };
  
  // <Menu onStateChange={ isMenuOpen } />

  render() {

    const { open } = this.state;
    return (

      <div>
        <h3 className="slide-menu__press"> <i className="fas fa-bars"></i></h3>
      <div>
      <Menu className="slide-menu" id="menu" width={'75%'} isOpen={ true } disableOverlayClick disableCloseOnEsc noOverlay >
       <img src={logo} alt="logo" className="logo"/>
        <button className="slide-menu__press" onClick={this.openMenu}>
          <i className="fas fa-bars"></i>
        </button>
      <Menu isOpen={open} customBurgerIcon={ false } noOverlay className="slide-menu" width={'85%'}>
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
        <Menu className="slide-menu" id="mobile-menu">
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
    );
  }
}

export default withRouter(AdminTopNav);
