import React, { Component } from "react"
import { AdminTopNav, AdminBottomNav, HandleService } from '../../../components'
import './fix-desktop.css'
export default class Order extends Component {

  render() {
    return (
        <div> 
            <div className="fix">
                <AdminTopNav />
                    <HandleService id={this.props.match.params.id}/>
                    <AdminBottomNav />
            </div>
        </div>    
    )
}

}