import React, { Component } from "react"
import { Tabs, TabLink, TabContent } from 'react-tabs-redux';
import { EmployeeTopNav,
  EmployeeBottomNav,
    EmployeeHistoryList,
      EmployeeIncomingList,
        EmployeeOngoingList,
          EmployeeCompleteList } from '../../components'
import './style.css';

export default class EmployeeHistory extends Component {

  render() {
    return (
        <div>  
            {/* <EmployeeTopNav/> */}
            <h1>Historia</h1>
            <ul>
            <Tabs>
            <div className="history-tabs">
              <TabLink className="history-tablink" to="inkommande">Kommande</TabLink>
              <TabLink className="history-tablink" to="pågående">Pågående</TabLink>
              <TabLink className="history-tablink" to="avslutade">Avslutade</TabLink>
            </div>
              <TabContent for="inkommande"><EmployeeIncomingList/></TabContent>
              <TabContent for="pågående"><EmployeeOngoingList/></TabContent>
              <TabContent for="avslutade"><EmployeeCompleteList/></TabContent>
            </Tabs>
          {/* <li>         
              <div className="edit">
                <p>History lol?</p>

                <i className="fas fa-edit" />
              </div>
          </li> */}
            </ul>
            <EmployeeBottomNav/>
        </div>    
    )
  }

}