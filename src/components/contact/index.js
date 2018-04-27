import React, { Component } from 'react'

import './style.css'

class Contact extends Component {

  constructor (props) {
    super(props)
    this.state = {
    };
}

render() {
    return (
        <div className="contact">
          <a href="tel:XXXXXXXXXX">
            <i class="fas fa-phone"></i>
          </a>
          <a href="mailto:XXXXXXXXX">
            <i class="fas fa-envelope"></i>
          </a>
        </div>
    )
}
}

export default Contact;