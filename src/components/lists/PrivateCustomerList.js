
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../redux/actions/admin/Accounts";
import Cookies from "universal-cookie";

import { Link, withRouter } from "react-router-dom";
import './style.css'

class PrivateCustomerList extends Component {

  componentWillMount() { 
    const cookies = new Cookies();
    var token = cookies.get("token");
    const user = JSON.parse(
      window.atob(
        token
          .split(".")[1]
          .replace("-", "+")
          .replace("_", "/")
      ))

    this.props.dispatch(fetchUsers(token));
  }

  render() {

    const { users } = this.props;

    // if type === private

    return (
      users ?
      <div className="BasicList__container">
        <h4> Företag </h4>
        <ul className="BasicList__list">
          {/* {users.map(order => (
          <li key={user.id}>
            <Link to={`/admin/customers/private/${user_id}`}>
              <div className="edit">
                <p> {user.name} </p>
                <i className="fas fa-edit" />
              </div>
            </Link>
          </li>
          ))} */}
        </ul>
      </div>
      : (
        <div className="BasicList__container">
          <h4> Privatkunder </h4>
          <p>Inga användare att visa</p>
        </div>  
      )
    )
  }
}

const mapStateToProps = state => ({ 
  orders: state.admin.users, 
});

export default withRouter(connect(mapStateToProps)(PrivateCustomerList));
