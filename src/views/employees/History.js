import React, { Component } from "react"
import { Tabs, TabLink, TabContent } from 'react-tabs-redux';
import { 
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
            <h1>Historik</h1>
            <ul>
            <div className="col-md-6 col-md-offset-3">
            <Tabs>
            <div className="history-tabs">
              <TabLink className="history-tablink" to="inkommande">Inkommande</TabLink>
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
            </div>
            </ul>
            <EmployeeBottomNav/>
        </div>    
    )
  }

}