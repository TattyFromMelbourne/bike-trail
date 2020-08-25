import React, { Component } from 'react'
import GoogleMap from 'google-map-react';
import MapMarker from './MapMarker'
import MapStyle from './MapStyle.json'
import PropTypes from 'prop-types'

class TrailMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      center: {
        lat: -37.766487,
        lng: 144.961706
      },
      zoom: 16
    }
  }

  render() {
    let selectedCenter
    if (this.props.selectedMarker != null) {
      selectedCenter = { lat: this.props.selectedMarker.lat, lng: this.props.selectedMarker.lng }
    } else {
      selectedCenter = this.state.center
    }

    const mapOptions = {
      styles: MapStyle
    }

    return (
      <div id="mapWrapper">
        <GoogleMap
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }} // eslint-disable-line no-undef
          center={selectedCenter}
          zoom={this.state.zoom}
          options={mapOptions}
          // layerTypes={['BicyclingLayer']}
        >
          {this.props.markers.map((marker, index) => {
            return (
              <MapMarker
                key={index}
                lat={marker.lat}
                lng={marker.lng}
                marker={marker}
                selectedMarker={this.props.selectedMarker}
                handleSelection={this.props.handleSelection}
              />
            )
          })}
        </GoogleMap>
      </div>
    )
  }
}

TrailMap.propTypes = {
  handleSelection: PropTypes.func.isRequired,
  selectedMarker: PropTypes.object,
  markers: PropTypes.array.isRequired
};


export default TrailMap
