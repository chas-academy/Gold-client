import React, { Component } from "react"
import { Link, withRouter } from "react-router-dom"

import "./style.css"


class AdminBottomNav extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
      }

    logout() {
        localStorage.clear();
        this.props.history.push("/");
      }    
    
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
                        <button onClick={this.logout}>
                            Logga ut
                        </button>
                    </li>
                </ul>    
            </nav>
        )
    }
}

export default withRouter(AdminBottomNav);
