import React, { Component } from "react";
// import { connect } from "react-redux";
import { AdminTopNav, AdminBottomNav, EmployeeList, CreateUser } from "../../../components";

export default class Employees extends Component {
  render() {
    return (
      <div>
        <AdminTopNav />
        <div className="Admin__div">
          <EmployeeList />
          <CreateUser />
        </div>  
        <AdminBottomNav />
      </div>
    );
  }
}
