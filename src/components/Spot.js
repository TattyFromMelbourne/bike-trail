import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Spot extends Component {
  constructor(props) {
    super(props)
    // create a ref to store the focusSpot DOM element
    this.focusSpot = React.createRef()
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidUpdate() {
    let pixels = 0
    if (this.props.marker === this.props.selectedMarker) {
      pixels = this.focusSpot.current.offsetTop
      document.getElementById('trailInterestSpots').scrollTop = pixels
    }
  }

  handleClick = () => {
    this.props.handleSelection(this.props.marker)
  };

  render() {
    const currentStyle = this.props.marker === this.props.selectedMarker
      ? 'marker-container current'
      : 'marker-container'
    const backgroundImageStyle = {
      backgroundImage: `url('${this.props.marker.imageUrl}')`
    }
    const title = `${this.props.marker.name}`
    const description = `${this.props.marker.description}`

    let address
    if (typeof this.props.marker.address !== 'undefined') {
      address = <div className="marker-address">{this.props.marker.address}</div>
    } else {
      address = ''
    }

    const divId = `spot-${this.props.divId}`

    return (
      <div
        id={divId}
        className={currentStyle}
        ref={this.focusSpot}
        onClick={this.handleClick}
      >
        <div className="marker-image" style={backgroundImageStyle} />
        <div className="marker-title">{title}</div>
        {address}
        <div className="marker-description">{description}</div>
      </div>
    )
  }
}

Spot.propTypes = {
  handleSelection: PropTypes.func.isRequired,
  divId: PropTypes.number.isRequired,
  marker: PropTypes.object.isRequired,
  selectedMarker: PropTypes.object.isRequired
};

export default Spot
