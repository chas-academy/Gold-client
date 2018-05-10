import React, { Component } from "react";
// import { connect } from "react-redux";
import { AdminTopNav, AdminBottomNav, EmployeeList, CreateUser } from "../../../components";

export default class Employees extends Component {
  render() {
    return (
      <div>
        <AdminTopNav />
          <EmployeeList />
          <CreateUser />
        <AdminBottomNav />
      </div>
    );
  }
}
