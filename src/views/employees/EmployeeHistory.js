import React, { Component } from "react";
import { Tabs, TabLink, TabContent } from "react-tabs-redux";
import {
  EmployeeBottomNav,
  EmployeeIncomingList,
  EmployeeActiveList,
  EmployeeHistoryList
} from "../../components";
import "./style.css";
import './fix-desktop-emp.css';

export default class EmployeeHistory extends Component {
  render() {
    return (
      <div>
        <div className="col-md-6 col-md-offset-3">
              <EmployeeHistoryList />
        </div>
        <EmployeeBottomNav />
      </div>
    );
  }
}
