import React, { Component } from "react"

// import CustomerHome from '/customers/Home'
// import EmployeeHome from '/employees/Home'

import { AdminTopNav, AdminBottomNav, GoogleApiWrapper, MapContainer } from './../components'

import './style.css'


class Home extends Component {
    constructor(props) {
      super(props);
      this.state = { 
          isAdmin: true,
          isCustomer: false,
          isEmployee: false
         };
    }

    componentDidMount() {

        // switch(true) {
        //     case localStorage.getItem('admin'):
        //         this.setState({ isAdmin: true }) 
        //         break;
        //     case localStorage.getItem('customer'):
        //         this.setState({ isCustomer: true})
        //         break;
        //     case localStorage.getItem('employee'):
        //         this.setState({ isEmployee: true})
        //         break;
        //     default:    
                    // redirect to login
        // }
    }

    render() {
        // const { isAdmin, isCustomer, isEmployee } = this.state;
        
        return (
            
            // {switch (true) {
            //     case isAdmin:  
                    <div>
                        <AdminTopNav />
                        <MapContainer />
                        <AdminBottomNav />
                    </div>
            //         break;
            //     case isCustomer:
            //         <CustomerHome />
            //         break;
            //     case isEmployee:
            //         <EmployeeHome />
            //         break;    
            //     default: 
            //         // redirect to login
            // }}
             
        )}
}

export default Home;