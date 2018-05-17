import React, { Component } from "react"
import { AdminTopNav, AdminBottomNav, UpdateUser, UpdateCustomer } from '../../../components'
import './style.css'

export default class HandleAccounts extends Component {

  render() {

    return (
        <div>
            <AdminTopNav />
                {this.props.match.params.user === 'employees' ?
                <UpdateUser id={this.props.match.params.id}/> 
                : 
                <UpdateCustomer id={this.props.match.params.id}/>}
            <AdminBottomNav />
        </div>    
    )
}

}


