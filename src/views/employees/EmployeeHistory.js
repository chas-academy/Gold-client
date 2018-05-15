import React, { Component } from "react";
import { Tabs, TabLink, TabContent } from "react-tabs-redux";
import {
  EmployeeBottomNav,
  EmployeeIncomingList,
  EmployeeActiveList,
  EmployeeCompleteList
} from "../../components";
import "./style.css";

export default class EmployeeHistory extends Component {
  render() {
    return (
      <div>
        <div className="col-md-6 col-md-offset-3">
          <Tabs>
            <div className="history-tabs">
              <TabLink className="history-tablink" to="pågående">
                Pågående
              </TabLink>
              <TabLink className="history-tablink" to="avslutade">
                Avslutade
              </TabLink>
            </div>
            <TabContent for="pågående">
              <EmployeeActiveList />
            </TabContent>
            <TabContent for="avslutade">
              <EmployeeCompleteList />
            </TabContent>
          </Tabs>
        </div>
        <EmployeeBottomNav />
      </div>
    );
  }
}
