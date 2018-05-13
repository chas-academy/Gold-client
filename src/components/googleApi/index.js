import React, { Component } from "react";
import { connect } from "react-redux";
import GoogleMapReact from "google-map-react";
import Cookies from "universal-cookie";

import { fetchServicesNew } from "../../redux/actions/admin/Orders";
import "./style.css";

class MapContainer extends Component {

  static defaultProps = {
    center: { lat: 55.5873503, lng: 12.9814429 },
    zoom: 9,
    mapOptions: {
      styles: [
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#f5f5f5"
            }
          ]
        },
        {
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#f5f5f5"
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#bdbdbd"
            }
          ]
        },
        {
          "featureType": "poi",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#eeeeee"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e5e5e5"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#ffffff"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dadada"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#F0F8FF"
            }
          ]
        },
        {
          "featureType": "road.local",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#F0F8FF"
            }
          ]
        },
        {
          "featureType": "transit",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e5e5e5"
            }
          ]
        },
        {
          "featureType": "transit.station",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#eeeeee"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#b3d9ff"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        }
      ]}
  };

  componentWillMount() {
    const cookies = new Cookies();
    var token = cookies.get("token");
    this.props.dispatch(fetchServicesNew(token));
  }

  render() {
    const { servicesNew } = this.props;

    const NewServices = servicesNew.filter(order => order.status === "new");
    const AssignedServices = servicesNew.filter(order => order.status === "assigned");
    const TakenServices = servicesNew.filter(order => order.status === "taken");
    const DoneServices = servicesNew.filter(order => order.status === "done");


    const Google = process.env.REACT_APP_API_KEY_GOOGLE;
    const AnyReactComponent = ({ text }) => <div>{text}</div>;


    return (

        <div style={{ height: "47vh", width: "95%", margin: "auto", marginTop: "8px"}}
          >
          <GoogleMapReact
            bootstrapURLKeys={{ key: Google }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            options={this.props.mapOptions}
            >

           {NewServices.map(order => (
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
            )
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
  servicesNew : state.adminOrders.servicesNew
});

export default connect(mapStateToProps)(MapContainer);
