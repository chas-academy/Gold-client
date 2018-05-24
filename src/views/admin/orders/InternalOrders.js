import React, { Component } from "react";
import {
  AdminTopNav,
  AdminBottomNav,
  InternalOrdersList
} from "../../../components";

export default class InternalOrders extends Component {
  render() {
    return (
      <div>
        <AdminTopNav />
        <InternalOrdersList />
        <AdminBottomNav />
      </div>
    );
  }
}
