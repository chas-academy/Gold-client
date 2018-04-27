import React, { Component } from "react"
import GoogleMapReact from 'google-map-react'

import './style.css'

import { CustomerBottomNav, Contact, MapContainer } from '../../components'

export default class CustomerContact extends Component {
    constructor (props) {
        super(props);
    } 

    
    static defaultProps = {
        center: { lat: 55.5873503, lng: 12.9814429},
        zoom: 15
    }
    
    render() {
        const AnyReactComponent = ({ text }) => <div>{ text }</div>;
        const Google = 'AIzaSyCt8fptPasyGjtQHBMYzhNvPgz5vefEzeY';
        
        return (
        <div className="customerContact">
              <h4> Har du frågor eller funderingar? Kontakta oss gärna! </h4>
              <div className="contactInfo">
                    <a href="tel:+4640260260">
                      <i class="fas fa-phone"></i>
                    </a>
                    <a href="mailto:info@servicebyran.com">
                      <i class="fas fa-envelope"></i>
                    </a>
              </div>

              <div className='google-map2' style={{ height: '500px', width: '100%' }}>
                <GoogleMapReact
                  bootstrapURLKeys={{ key: Google }}
                  defaultCenter={ this.props.center }
                  defaultZoom={ this.props.zoom }>

                <AnyReactComponent
                  lat={ 55.5873503 }
                  lng={ 12.9814429 }
                  text={<img src="../../assets/img/logo_servicebyran.png" alt="Logo" />}
                />

               </GoogleMapReact>
               </div> 
          <CustomerBottomNav />
        </div>
    )
  }

}