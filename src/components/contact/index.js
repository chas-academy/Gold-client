import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Contact__container">
        <a href="tel:XXXXXXXXXX">
          <i className="fas fa-phone" />
        </a>
        <a href="mailto:XXXXXXXXX">
          <i className="fas fa-envelope" />
        </a>
      </div>
    );
  }
}

export default Contact;
