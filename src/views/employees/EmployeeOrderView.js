import React, { Component } from "react";
import {
  EmployeeBottomNav,
  EmployeeOrderDetails,
} from "../../components";

export default class EmployeeOrderView extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const {
      match: { params }
    } = this.props;
    return (
      <div>
        <div className="col-md-6 col-md-offset-3">
          <EmployeeOrderDetails id={params.id} />
        </div>
        <EmployeeBottomNav />
      </div>
    );
  }
}
