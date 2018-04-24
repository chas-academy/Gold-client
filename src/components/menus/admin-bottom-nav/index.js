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
                                <i className="fas fa-quidditch"></i>                            </Link>
                        </li>
                        <li>
                            <Link to={`/admin/orders/complaints`}>
                                <i className="far fa-frown"></i>
                            </Link>
                        </li>
                    <li>
                    <Link to={`/home`}>
                        <i className="fas fa-home"></i>
                    </Link>
                    </li>
                </ul>    
            </nav>
        )
    }
}

export default withRouter(AdminBottomNav);
