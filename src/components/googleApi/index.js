import React, { Component } from "react";
import { connect } from "react-redux";
import GoogleMapReact from "google-map-react";

import Cookies from "universal-cookie";
import Moment from "react-moment";
import moment from "moment";

import { fetchServicesNew, fetchServicesAssigned, fetchServicesDone } from "../../redux/actions/admin/Orders";

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
    this.props.dispatch(fetchServicesAssigned(token));
    this.props.dispatch(fetchServicesDone(token));

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
    const { servicesNew, servicesAssigned, servicesDone } = this.props;

    const { mapOptions, message } = this.state;
    
    const NewServices = servicesNew.filter(order => order.status === "new");
    const NewOrders = NewServices.filter(order => order.order_type === 'order');
    const NewComplaints = NewServices.filter(order => order.order_type === 'complaints');
    
    const AssignedServices = servicesAssigned.filter( order => order.status === "assigned");
    const AssignedOrders = AssignedServices.filter(order => order.order_type === 'order');
    const AssignedComplaints = AssignedServices.filter(order => order.order_type === 'complaints');
    const AssignedInternalOrders = AssignedServices.filter(order => order.order_type === 'int_orders');

    NewOrders.map(order => {
      console.log(order.order.lat)
    })
    const DoneServices = servicesDone.filter(order => order.status === "done");
    const DoneOrders = DoneServices.filter(order => order.order_type === 'order');
    const DoneComplaints = DoneServices.filter(order => order.order_type === 'complaints');
    const DoneInternalOrders = DoneServices.filter(order => order.order_type === 'int_orders');

    const Google = process.env.REACT_APP_API_KEY_GOOGLE;
    const AnyReactComponent = ({ text }) => <div>{text}</div>;

    
    return (
      <div className="map"
        style={{
          height: "48vh",
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
            {NewOrders.map(order => (
              <AnyReactComponent
              key={order.id}
              lat={order.order.lat}
              lng={order.order.lon}
              text={
                <a href={`admin/orders/${order.id}`}>
                    <i
                      className="fas fa-map-marker button-glow-new"
                      style={{ color: "red", fontSize: "18px" }}
                      />
                  </a>
                }
                />
            ))}
            {NewComplaints.map(order => (
              <AnyReactComponent
              key={order.id}
              lat={order.order.lat}
              lng={order.order.lon}
              text={
                <a href={`admin/orders/${order.id}`}>
                    <i
                      className="fas fa-map-marker button-glow-new"
                      style={{ color: "red", fontSize: "18px" }}
                      />
                  </a>
                }
                />
            ))}
            {AssignedOrders.map(order => (
            <AnyReactComponent
              key={order.id}
              lat={order.order.lat}
              lng={order.order.lon}
              text={
                <a href={`admin/orders/${order.id}`}>
                  <i
                    className="fas fa-map-marker button-glow-assigned"
                    style={{ color: "orange", fontSize: "18px" }}
                  />
                </a>
              }
            />
          ))}
          {AssignedComplaints.map(order => (
            <AnyReactComponent
              key={order.id}
              lat={order.order.lat}
              lng={order.order.lon}
              text={
                <a href={`admin/orders/${order.id}`}>
                  <i
                    className="fas fa-map-marker button-glow-assigned"
                    style={{ color: "orange", fontSize: "18px" }}
                  />
                </a>
              }
            />
          ))}
          {DoneInternalOrders.map(order => (
            <AnyReactComponent
              key={order.id}
              lat={order.order.lat}
              lng={order.order.lon}
              text={
                <a href={`admin/orders/${order.id}`}>
                  <i
                    className="fas fa-map-marker button-glow-assigned"
                    style={{ color: "orange", fontSize: "18px" }}
                  />
                </a>
              }
            />
          ))}
          {DoneOrders.map(order => (
            <AnyReactComponent
              key={order.id}
              lat={order.order.lat}
              lng={order.order.lon}
              text={
                <a href={`admin/orders/${order.id}`}>
                  <i
                    className="fas fa-map-marker button-glow-assigned"
                    style={{ color: "orange", fontSize: "18px" }}
                  />
                </a>
              }
            />
          ))}
          {DoneComplaints.map(order => (
            <AnyReactComponent
              key={order.id}
              lat={order.order.lat}
              lng={order.order.lon}
              text={
                <a href={`admin/orders/${order.id}`}>
                  <i
                    className="fas fa-map-marker button-glow-assigned"
                    style={{ color: "orange", fontSize: "18px" }}
                  />
                </a>
              }
            />
          ))}
          {DoneInternalOrders.map(order => (
            <AnyReactComponent
              key={order.id}
              lat={order.order.lat}
              lng={order.order.lon}
              text={
                <a href={`admin/orders/${order.id}`}>
                  <i
                    className="fas fa-map-marker button-glow-assigned"
                    style={{ color: "orange", fontSize: "18px" }}
                  />
                </a>
              }
            />
          ))
        }
        </GoogleMapReact>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  servicesNew: state.adminOrders.servicesNew,
  servicesAssigned: state.adminOrders.servicesAssigned,
  servicesDone: state.adminOrders.servicesDone,

});

export default connect(mapStateToProps)(MapContainer);
