import React, { Component } from "react";
import {
  EmployeeBottomNav,
  EmployeeJobDetails,
} from "../../components";

export default class EmployeeJobView extends Component {
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
          <EmployeeJobDetails id={params.id} />
        </div>
        <EmployeeBottomNav />
      </div>
    );
  }
}
