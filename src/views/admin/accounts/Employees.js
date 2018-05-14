import React, { Component } from "react";
import { AdminTopNav, AdminBottomNav, EmployeeList, AddUser } from "../../../components";

export default class Employees extends Component {
  render() {
    return (
      <div>
        <AdminTopNav />
          <EmployeeList />
          <AddUser />
        <AdminBottomNav />
      </div>
    );
  }
}
