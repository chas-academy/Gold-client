import React, { Component } from 'react'

import { withRouter } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'
import './style.css'


class AdminTopServices extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        openServices: false
      }
  
      this.openMenuServices = this.openMenuServices.bind(this);
    }
  
    openMenuServices(event) {
        event.preventDefault();
        if (this.state.openServices === true) {
          this.setState({ openServices: false })
        } else {
          this.setState({ openServices: true })
        }
      }

      render() {

        const { openServices } = this.state;
        return (
    
          <div>
            <button className="slide-menu__press" onClick={this.openMenuServices}>
              <i className="fas fa-bars"></i>
            </button>
          <Menu isOpen={openServices} customBurgerIcon={ false } noOverlay className="slide-menu services" width={'85%'}>
            <h3 className="slide-menu__header">Ärenden</h3>
              <a id="incoming" className="menu-item" href={`/admin/services/incoming`}>                
                <i className="fas fa-inbox slide"></i>
                Nya
              </a>
              <a id="incoming" className="menu-item" href={`/admin/services/assigned`}>                
              <i className="fas fa-arrow-right slide"></i>
                Hanterade
              </a>
              <a id="active" className="menu-item" href={`/admin/services/active`}>
              < i className="fas fa-clock slide"></i>
                Pågående
              </a>
              <a id="active" className="menu-item" href={`/admin/orders`}>
              <i className="fas fa-list slide"></i>
                Beställningar
              </a>
              <a id="internal" className="menu-item" href={`/admin/orders/internal`}>
                <i className="fas fa-envelope-open slide"></i>
                Interna</a>
              <a id="complaints" className="menu-item" href={`/admin/orders/complaints`}>
                <i className="fas fa-exclamation-triangle slide"></i>
                Reklamationer</a>
              <a id="completed" className="menu-item" href={`/admin/services/completed`}>
                <i className="fas fa-history slide"></i>
                Avslutade
              </a> 
              <a id="logout" className="menu-item" href={`/logout`}>
          <i className="fas fa-sign-out-alt slide" />
          Logga ut
        </a>
        </Menu>  
      </div>
    );
  }
}

export default withRouter(AdminTopServices);
