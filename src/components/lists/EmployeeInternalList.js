import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchInternal } from "../../redux/actions/employees";
import { Link, withRouter } from "react-router-dom";
import { Tabs, TabLink, TabContent } from "react-tabs-redux";
import Cookies from "universal-cookie";
import "./style.css";

class EmployeeInternalList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const cookies = new Cookies();
    var token = cookies.get("token");
    const user = JSON.parse(
      window.atob(
        token
          .split(".")[1]
          .replace("-", "+")
          .replace("_", "/")
      )
    );

    this.props.dispatch(fetchInternal(user.id, token));
  }

  render() {
    const { isFetching, Internal } = this.props;
    return (
        <div className="BasicList__container">
          <h4>  Interna ärenden  </h4>
        <p>
          Här samlas interna ärenden som ska hanteras. Klicka på ärendet och bekräfta när det är åtgärdat.
        </p>
        <hr />

              {Internal.length ? (
                <ul className="BasicList__list">
                  {Internal.map(order => (
                    <li key={order.id}>
                      <Link to={`/admin/services/${order.id}`}>
                        <div className="edit">
                          {order.company_name ? (
                            <p>{order.company_name} </p>
                          ) : (
                            <p>{order.con_pers} </p>
                          )}
                          <p> Hantera </p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="BasicList__container">
                  <p>Inga interna ärenden att hantera </p>
                </div>
              )}
        </div>
    );
  }
}

const mapStateToProps = state => ({
  Internal: state.employee.Internal,
  isFetching: state.employee.isFetching
});

export default withRouter(connect(mapStateToProps)(EmployeeInternalList));
