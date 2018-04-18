import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./style.css";

class AdminMainMenu extends Component {

  render() {
    return  (
        <nav>
            <p>Hej</p>
          <ul className="">
            <li>
                <p className=""> Ärenden </p>
                <ul className="">
                    <li>
                      <Link to={`/admin/orders/incoming`}>
                        <p>Nya</p>
                      </Link>
                    </li>
                    <li>
                      <Link to={`/admin/orders/handle`}>
                        <p>Pågående</p>
                      </Link>
                    </li>
                    <li>
                      <Link to={`/admin/orders/completed`}>
                          <p>Avslutade</p>
                      </Link>
                    </li>
                    <li>
                      <Link to={`/admin/orders/internal`}>
                          <p>Interna</p>
                      </Link>
                    </li>
                    <li>
                      <Link to={`/admin/orders/complaints`}>
                          <p>Reklamationer</p>
                      </Link>
                    </li>
                </ul>
            </li>
            <li>
                <p className=""> Konton </p>
                <ul>
                    <li>
                        <Link to={`/admin/accounts/employees`}>
                            <p>Anställda</p>
                        </Link>
                    </li>
                    <li>
                        <Link to={`/admin/accounts/customers/private`}>
                            <p>Privatkunder</p>
                        </Link>
                    </li>
                    <li>
                        <Link to={`/admin/accounts/customers/companies`}>
                            <p>Företagskunder</p>
                        </Link>
                    </li>
                    <li>
                        <Link to={`/admin/accounts/profile`}>
                            <p>Egen profil</p>
                        </Link>
                    </li>
                </ul>        
            </li>
          </ul>
        </nav>
    ) 
  }
}

export default withRouter(AdminMainMenu);
