import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { slide as Menu } from 'react-burger-menu'
import './style.css'


class AdminTopServices extends Component { 
  constructor(props) {
    super(props);
    this.state = { openServices: false }
    this.openMenuServices = this.openMenuServices.bind(this);
  }

  openMenuServices(event) {   
    event.preventDefault();

    this.state.openServices === true ?
      this.setState({ openServices: false })
    : this.setState({ openServices: true })
  }

  render() {
    const { openServices } = this.state;
    
    return (
      <div>
        <button className="slide-menu__icon-top services__press" onClick={this.openMenuServices}>
          <i className="fas fa-bars"></i>
        </button>
        
        <Menu isOpen={openServices} customBurgerIcon={ false } className="slide-menu services" width={'40vh'}>
        <h3> Hantera ärenden</h3>
          <a id="incoming" href={`/admin/services/incoming`}>                
            <i className="fas fa-inbox"></i>
            Nya
          </a>
          <a id="incoming" href={`/admin/services/assigned`}>                
          <i className="fas fa-arrow-right"></i>
            Hanterade
          </a>
          <a id="active" href={`/admin/orders`}>
          <i className="fas fa-list"></i>
            Beställningar
          </a>
          <a id="internal" href={`/admin/orders/internal`}>
            <i className="fas fa-envelope-open"></i>
            Interna</a>
          <a id="complaints" href={`/admin/orders/complaints`}>
            <i className="fas fa-exclamation-circle"></i>
            Reklamationer</a>
          <a id="completed" href={`/admin/services/completed`}>
            <i className="fas fa-history"></i>
            Avslutade
          </a> 
          <a id="logout" href={`/logout`} onClick={this.logOut}>
            <i className="fas fa-sign-out-alt" />
            Logga ut
          </a>
        </Menu>  
      </div>
    )
  }
}

export default withRouter(AdminTopServices)
