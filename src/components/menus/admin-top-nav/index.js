import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { NavDropdown, MenuItem }from 'react-bootstrap'

import './style.css'

class AdminTopNav extends Component {

  render() {
    return (
            <div className="navBar">
            <NavDropdown title={<i class="fas fa-list"></i>} noCaret>
                <MenuItem>
                    <Link to={`/admin/orders/incoming`}>
                      <p>Nya</p>
                    </Link>
                </MenuItem>    
                <MenuItem>
                  <Link to={`/admin/orders/active`}>
                    <p>Pågående</p>
                  </Link>
                </MenuItem>    
                <MenuItem>
                  <Link to={`/admin/orders/internal`}>
                    <p>Interna</p>
                  </Link>
                </MenuItem>    
                <MenuItem>
                  <Link to={`/admin/orders/complaints`}>
                    <p>Reklamationer</p>
                  </Link>
                </MenuItem>    
                <MenuItem>
                  <Link to={`/admin/orders/completed`}>
                    <p>Avslutade</p>
                  </Link>
                </MenuItem>    
            </NavDropdown>
            <NavDropdown title={<i class="far fa-user-circle"></i>} noCaret>
                <MenuItem>
                  <Link to={`/admin/accounts/employees`}>
                    <p>Anställda</p>
                  </Link>
                </MenuItem>  
                <MenuItem>
                  <Link to={`/admin/accounts/customers/private`}>
                    <p>Privatkunder</p>
                  </Link>
                </MenuItem>  
                <MenuItem>
                  <Link to={`/admin/accounts/customers/companies`}>
                    <p>Företagskunder</p>
                  </Link>
                </MenuItem>  
                <MenuItem>
                  <Link to={`/admin/accounts/profile`}>
                    <p>Min profil</p>
                  </Link>
                </MenuItem>  
              </NavDropdown>
              </div>
    );
  }
}

export default withRouter(AdminTopNav);
