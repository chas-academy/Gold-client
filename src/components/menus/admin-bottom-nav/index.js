import React, { Component } from "react"
import { Link, withRouter } from "react-router-dom"

import "./style.css"


class AdminBottomNav extends Component {
    
    render() {

        return  (
            <nav className="bottomNav">
                <ul className="bottomNavList">
                    <li>
                        <Link to={`/admin/orders/incoming`}>
                          <p>Nya beställningar</p>
                        </Link>
                    </li>
                    <li>
                        <Link to={`/admin/orders/complaints`}>
                          <p>Nya reklamationer</p>
                        </Link>
                    </li>
                    <li>
                        <Link to={`/logout`}>
                          <p>logga ut</p>
                        </Link>
                    </li>
                </ul>    
            </nav>
        )
    }
}

export default withRouter(AdminBottomNav);
