import React, { Component } from "react";
// import { connect } from "react-redux";
import { AdminTopNav, AdminBottomNav, EmployeeList} from "../../../components";

export default class Employees extends Component {
  render() {
    return (
      <div>
        <AdminTopNav />
        <EmployeeList />
        <AdminBottomNav />
      </div>
    );
  }
}
