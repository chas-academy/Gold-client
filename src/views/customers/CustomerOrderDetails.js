import React, { Component } from "react";
import {
  CustomerBottomNav,
  CustomerOrderDetails,
} from "../../components";

export default class CustomerOrderView extends Component {

  render() {
    const { match: { params } } = this.props;

    return (
      <div>
        <div className="col-md-6 col-md-offset-3">
          <CustomerOrderDetails id={params.id} />
        </div>
        <CustomerBottomNav />
      </div>
    );
  }
}
