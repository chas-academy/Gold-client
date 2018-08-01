import React, { Component } from "react";
import { EmployeeHistoryList, EmployeeBottomNav } from "../../components";

import "./style.css";

export default class EmployeeHistory extends Component {
  render() {
    return (
      <div>
        <div className="forms-adjust">
              <EmployeeHistoryList />
              <EmployeeBottomNav/>
        </div>
      </div>
    );
  }
}
