import React, { Component } from "react";
import { connect } from "react-redux";
import GoogleMapReact from "google-map-react";
import Cookies from "universal-cookie";

import { fetchServices } from "../../redux/actions/admin/Orders";
import "./style.css";

class MapContainer extends Component {
  
  static defaultProps = {
    center: { lat: 55.5873503, lng: 12.9814429 },
    zoom: 9
  };

  componentWillMount() {
    const cookies = new Cookies();
    var token = cookies.get("token");
    this.props.dispatch(fetchServices(token));
  }

  render() {
    const Google = process.env.REACT_APP_API_KEY_GOOGLE;
    const AnyReactComponent = ({ text }) => <div>{text}</div>;

    return (
      <div className="google-map-overlay">
        <div
          className="google-map"
          style={{ height: "50vh", width: "100%", marginTop: "10px" }}
        >
          <GoogleMapReact
            bootstrapURLKeys={{ key: Google }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
              lat={55.60587}
              lng={13.20073}
              text={
                <a href="admin/orders/1">
                  <i
                    className="fas fa-map-marker button-glow-new"
                    style={{ color: "red", fontSize: "18px" }}
                  />
                </a>
              }
            />

            <AnyReactComponent
              lat={55.70587}
              lng={13.30073}
              text={
                <a href="admin/orders/2">
                  {" "}
                  <i
                    className="fas fa-map-marker button-glow-active"
                    style={{ color: "orange", fontSize: "18px" }}
                  />
                </a>
              }
            />

            <AnyReactComponent
              lat={55.80587}
              lng={13.30073}
              text={
                <a href="admin/orders/3">
                  <i
                    className="fas fa-map-marker"
                    style={{ color: "green", fontSize: "18px" }}
                  />
                </a>
              }
            />

            <AnyReactComponent
              lat={55.80587}
              lng={12.99073}
              text={
                <a href="admin/orders/4">
                  <i
                    className="fas fa-map-marker"
                    style={{ color: "green", fontSize: "18px" }}
                  />
                </a>
              }
            />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  services : state.adminOrders.services
});

export default connect(mapStateToProps)(MapContainer);
