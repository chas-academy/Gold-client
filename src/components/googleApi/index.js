import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

import './style.css'

const AnyReactComponent = ({ text }) => <div>{ text }</div>;

const Google = '';


 export default class MapContainer extends Component {
  

    static defaultProps = {
    center: { lat: 55.5873503, lng: 12.9814429},
    zoom: 10
  }

render() {
    return (
        <div className='google-map' style={{ height: '50vh', width: '100%', marginTop: '-10px' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: Google }}
            defaultCenter={ this.props.center }
            defaultZoom={ this.props.zoom }>

            <AnyReactComponent
              lat={ 55.60587 }
              lng={ 13.20073 }
              text={<i className="fas fa-dot-circle" style={{color:'red', fontSize: '25px'}}></i>}
            />

            <AnyReactComponent
              lat={ 55.80587 }
              lng={ 13.30073 }
              text={<i className="fas fa-dot-circle" style={{color:'green', fontSize: '25px'}}></i>}
            />

          <AnyReactComponent
              lat={ 55.80587 }
              lng={ 12.99073 }
              text={<i className="fas fa-dot-circle" style={{color:'green', fontSize: '25px'}}></i>}
            />

          </GoogleMapReact>
          </div>
    )
  }
}

