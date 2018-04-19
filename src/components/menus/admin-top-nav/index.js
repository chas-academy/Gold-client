import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import { Tabs, TabLink, TabContent } from "react-tabs-redux";

import "./style.css";

class AdminTopNav extends Component {
  render() {
    return (
      <nav>
        <Tabs>
          <div className="TabLinks">
            <TabLink to="tab1" default>
              Ärenden
            </TabLink>
            <TabLink to="tab2">Konton</TabLink>
          </div>
          <TabContent for="tab1">
            <ul className="AdminMainMenu_orders">
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
          </TabContent>
          <TabContent for="tab2">
            <ul className="AdminMainMenu_orders">
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
          </TabContent>
        </Tabs>
      </nav>
    );
  }
}

export default withRouter(AdminTopNav);
