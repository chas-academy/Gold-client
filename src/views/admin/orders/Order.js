import React, { Component } from "react"
import { AdminTopNav, AdminBottomNav, HandleService } from '../../../components'

export default class Order extends Component {

  render() {
    return (
        <div> 
            <AdminTopNav />
                <HandleService id={this.props.match.params.id}/>
            <AdminBottomNav />
        </div>    
    )
}

}