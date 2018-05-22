
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
    this.props.dispatch(fetchCompanies(token));
  }

  render() {

    const { companies, isFetching } = this.props;

    if(isFetching) {
      return <i class="fas fa-circle-notch fa-spin"></i>;
    }
    
    return (
      companies ?
      <div className="BasicList__container">
        <h4> Företag </h4>
        <ul className="BasicList__list">
          {companies.map(company => (
            <li key={company.user_id}>
              <Link to={`/admin/accounts/customers/${company.user_id}`}>
                <div className="edit">
                  <p> {company.user.name} </p>
                  <i className="fas fa-cog"></i>
                  </div>
              </Link>
            </li>
              ))}
        </ul>
      </div>
      : (
        <div className="BasicList__container inner">
          <h4> Företag </h4>
          <p>Inga användare att visa</p>
        </div>  
      )
    )
  }
}

const mapStateToProps = state => ({ 
  companies: state.adminAccounts.companies,
  isFetching: state.adminAccounts.isFetching 
});

export default withRouter(connect(mapStateToProps)(CompanyList));
