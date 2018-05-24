import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './style.css'

import { AdminTopServices, AdminTopAccounts } from '../../../components'

class AdminTopNav extends Component {

    render() {
      return (
        <div className="TopNav">
          <AdminTopServices />
          <AdminTopAccounts />
        </div>
      )
    }
}

export default withRouter(AdminTopNav);
