import React, { Component } from "react";
import { EmployeeHistoryList} from "../../components";

import "./style.css";
import './fix-desktop-emp.css';

export default class EmployeeHistory extends Component {
  render() {
    return (
      <div>
        <div className="col-md-6 col-md-offset-3">
              <EmployeeHistoryList />
        </div>
      </div>
    );
  }
}
