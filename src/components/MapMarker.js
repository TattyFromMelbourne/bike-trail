import React, { Component } from 'react'
import PropTypes from 'prop-types'

class MapMarker extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = () => {
    this.props.handleSelection(this.props.marker)
  };

  render() {
    let markerDivStyle = 'map-marker'
    let markerNameStyle = 'map-marker-name'
    if (this.props.marker === this.props.selectedMarker) {
      markerDivStyle = 'map-marker selected'
      markerNameStyle = 'map-marker-name selected'
    }
    return (
      <div>
        <div className={markerDivStyle} onClick={() => this.handleClick()} />
        <div className={markerNameStyle} onClick={() => this.handleClick()}>
          {this.props.marker.name}
        </div>
      </div>
    )
  }
}

MapMarker.propTypes = {
  handleSelection: PropTypes.func.isRequired,
  marker: PropTypes.object.isRequired,
  selectedMarker: PropTypes.object.isRequired
};

export default MapMarker
