import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Spot from './Spot'

class TrailInterestSpotList extends Component {
  render() {
    return (
      <div id="trail-spots-wrapper" className="markers-wrapper">
        {this.props.markers.map((marker, index) => {
          return (
            <Spot
              key={index}
              divId={index}
              marker={marker}
              selectedMarker={this.props.selectedMarker}
              handleSelection={this.props.handleSelection}
            />
          )
        })}
      </div>
    )
  }
}

TrailInterestSpotList.propTypes = {
  handleSelection: PropTypes.func.isRequired,
  selectedMarker: PropTypes.object,
  markers: PropTypes.array.isRequired
};

export default TrailInterestSpotList
