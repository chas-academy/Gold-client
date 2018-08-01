import React, { Component } from "react";
import { EmployeeBottomNav, EmployeeOrderDetails } from "../../components";

export default class EmployeeOrderView extends Component {
  render() {
    return (
      <div className="fix-employee">
        <div className="col-md-6 col-md-offset-3">
          <EmployeeOrderDetails
            id={this.props.match.params.id}
            history={this.props.history}
          />
        </div>
        <EmployeeBottomNav />
      </div>
    );
  }
}
