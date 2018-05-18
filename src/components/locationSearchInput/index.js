import React from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

import './style.css'

class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);  
    this.state = { 
      submitted: this.props.submitted,
      address: '',
      lat: '',
      lon: '' }
  }

  handleChange = (address) => {
    this.setState({ address })
  }

  handleSelect = (address) => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        console.log('Success', latLng)
        this.props.getAddress(this.state.address, latLng.lat, latLng.lng)
      })
      .catch(error => console.error('Error', error))
  }

  render() {
  const { address, submitted } = this.state; 

  console.log(address);
  return (
    <div className="form-group">
      <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
        >
        {({ getInputProps, suggestions, getSuggestionItemProps }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Adress',
                className: 'location-search-input'
              })}
              />
            <div className="autocomplete-dropdown-container">
              {suggestions.map(suggestion => {
                const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                : { backgroundColor: '#ffffff44', cursor: 'pointer' };
                return (
                  <div {...getSuggestionItemProps(suggestion, { className, style })}>
                    <span>{suggestion.description}</span>
                  </div>
                )
              })}
            </div>
            {!address && submitted &&
              <div className="help-block">Glöm inte fylla i adress!</div>
            }
          </div>
        )}
      </PlacesAutocomplete>
        {address && 
          <i className="fas fa-check BasicForm__autoCheck" />}
        </div>
    );
  }
}

export default LocationSearchInput;