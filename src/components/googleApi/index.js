import React, { Component } from "react";
import { connect } from "react-redux";
import GoogleMapReact from "google-map-react";

import Cookies from "universal-cookie";
import Moment from "react-moment";
import moment from "moment";

import { fetchServicesNew } from "../../redux/actions/admin/Orders";

import "./style.css";
import stylesDay from "./Styles-day.json";
import stylesNight from "./Styles-night.json";

class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mapOptions: "",
      message: ""
    };
  }

  componentWillMount() {
    const cookies = new Cookies();
    var token = cookies.get("token");
    this.props.dispatch(fetchServicesNew(token));

    const time = moment().format("HH");

  
    time <=3 || time >= 23 ?   
      this.setState({
        mapOptions: {
          styles: stylesNight
        },
          message: "Κοιμήσου ρε παιδί μου! 👴🏻"
        })
    : time <= 5 || time >= 22 ? 
      this.setState({
          mapOptions: {
            styles: stylesNight
          }})
      : this.setState({
          mapOptions: {
            styles: stylesDay
          }
        });
  }

  static defaultProps = {
    center: { lat: 55.5873503, lng: 12.9814429 },
    zoom: 9
  };

  render() {
    const { servicesNew } = this.props;

    const { mapOptions, message } = this.state;

    const NewServices = servicesNew.filter(order => order.status === "new");
    const AssignedServices = servicesNew.filter(
      order => order.status === "assigned"
    );
    const TakenServices = servicesNew.filter(order => order.status === "taken");
    const DoneServices = servicesNew.filter(order => order.status === "done");

    const Google = process.env.REACT_APP_API_KEY_GOOGLE;
    const AnyReactComponent = ({ text }) => <div>{text}</div>;

    return (
      <div
        style={{
          height: "45vh",
          width: "95%",
          margin: "auto",
          marginTop: "8px"
        }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: Google }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          options={this.state.mapOptions}
        >
          {message ? (
            <AnyReactComponent
              lat={55.68087}
              lng={12.53073}
              text={<p className="Sleep">{message}</p>}
            />
          ) : (
            NewServices.map(order => (
              <AnyReactComponent
                key={order.id}
                lat={55.80587}
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
            ))
          )}
          {AssignedServices.map(order => (
            <AnyReactComponent
              key={order.id}
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
          ))}
          {TakenServices.map(order => (
            <AnyReactComponent
              key={order.id}
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
          ))}
          {DoneServices.map(order => (
            <AnyReactComponent
              key={order.id}
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
          ))}

        </GoogleMapReact>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  servicesNew: state.adminOrders.servicesNew
});

export default connect(mapStateToProps)(MapContainer);
