import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'


const AnyReactComponent = ({ text }) => <div>{ text }</div>;

const Google = process.env.REACT_APP_API_KEY_GOOGLE;

export default class MapContainer extends Component {
  
    static defaultProps = {
    center: { lat: 55.60587, lng: 13.00073},
    zoom: 10
  }

render() {
    return (
      <div className='google-map' style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: Google }}
          defaultCenter={ this.props.center }
          defaultZoom={ this.props.zoom }>

          <AnyReactComponent
            lat={ 55.60587 }
            lng={ 13.20073 }
            text={<i class="fas fa-dot-circle" style={{color:'red', fontSize: '20px'}}></i>}
          />
          
          <AnyReactComponent
            lat={ 55.80587 }
            lng={ 13.30073 }
            text={<i class="fas fa-dot-circle" style={{color:'green', fontSize: '20px'}}></i>}
          />

        <AnyReactComponent
            lat={ 55.80587 }
            lng={ 12.99073 }
            text={<i class="fas fa-dot-circle" style={{color:'green', fontSize: '20px'}}></i>}
          />

        </GoogleMapReact>
      </div>
    )
  }
}