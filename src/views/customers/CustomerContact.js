import React, { Component } from "react"
import GoogleMapReact from 'google-map-react'
import './style.css'

import { CustomerBottomNav } from '../../components'

export default class CustomerContact extends Component {
    // constructor (props) {
    //     super(props);
    // } 

    
    static defaultProps = {
        center: { lat: 55.5873503, lng: 12.9814429},
        zoom: 14
    }
    
    render() {
        const AnyReactComponent = ({ text }) => <div>{ text }</div>;
        const Google = '';
        
        return (
          <div className="BasicList__container">
                <h4> Har du fårgor eller funderingar? Kontakta oss gärna! </h4>
              <div className="contactInfo">
                    <a href="tel:+4640260260">
                      <i className="fas fa-phone contact"></i>
                    </a>
                    <a href="mailto:info@servicebyran.com">
                      <i className="fas fa-envelope contact"></i>
                    </a>
                <h5> Adress: Lorensborgsgatan 5, 211 22 Malmö  </h5>
              </div>

              <div className='google-map2' style={{ height: '68vh', width: '100%' }}>
                <GoogleMapReact
                  bootstrapURLKeys={{ key: Google }}
                  defaultCenter={ this.props.center }
                  defaultZoom={ this.props.zoom }>

                <AnyReactComponent
                  lat={ 55.5873503 }
                  lng={ 12.9814429 }
                  text={<i className="fas fa-map-marker contactMarker"></i> }
                />

               </GoogleMapReact>
               </div> 
          <CustomerBottomNav />
        </div>
    )
  }

}