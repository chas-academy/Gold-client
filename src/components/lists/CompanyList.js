
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCompanies } from "../../redux/actions/admin/Accounts";
import Cookies from "universal-cookie";

import { Link, withRouter } from "react-router-dom";
import './style.css'

class CompanyList extends Component {

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

    this.props.dispatch(fetchCompanies(token));
  }

  render() {

    const { companies } = this.props;

    // if type === company

    return (
      companies ?
      <div className="BasicList__container">
      {console.log(companies)}
        <h4> Företag </h4>
        <ul className="BasicList__list">
          {companies.map((company, index) => {
            <li key={company.user_id}>
              <Link to={`/admin/customers/companies/${company.user_id}`}>
              <div className="edit">
                <p> hej </p>
                <i className="fas fa-edit" />
              </div>
              })}
            </Link>
          </li>
          })}
        </ul>
      </div>
      : (
        <div className="BasicList__container">
          <h4> Företag </h4>
          <p>Inga användare att visa</p>
        </div>  
      )
    )
  }
}

const mapStateToProps = state => ({ 
  companies: state.adminAccounts.companies, 
});

export default withRouter(connect(mapStateToProps)(CompanyList));
