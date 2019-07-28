import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavigationBar from './NavigationBar'
import TrailMap from './TrailMap'
import TrailInterestSpotList from './TrailInterestSpotList'
import ModalWindow from './ModalWindow'
import {OrbitSpinner} from 'react-epic-spinners'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      markers: [],
      selectedMarker: null,
      loading: true,
      showModalWindow: false
    }
    this.handleShowModalWindow = this.handleShowModalWindow.bind(this)
  }

  componentDidMount() {
    fetch('./data/trail-markers.json')
      .then(response => response.json())
      .then((data) => {
        data.sort((a, b) => a.name.localeCompare(b.name))
        this.setState({
          markers: data,
          selectedMarker: data[0],
          loading: false
        })
      })
  }

  handleSelection = (marker) => {
    this.setState({
      selectedMarker: marker
    })
  }

  handleShowModalWindow = (modalWindowState) => {
    this.setState({
      showModalWindow: modalWindowState
    })
  };

  render() {
    const waiting = this.state.loading ? 'isVisible' : 'isHidden'
    return (
      <React.Fragment>

      <div id="loading" className={waiting}>
        <OrbitSpinner color='#000000' size={60} />
        <div>Loading...</div>
      </div>

      <div>
        <ModalWindow
          showModalWindow={this.state.showModalWindow}
          handleShowModalWindow={this.handleShowModalWindow}
        />
        <NavigationBar
          showModalWindow={this.state.showModalWindow}
          handleShowModalWindow={this.handleShowModalWindow}
        />
        <Container fluid={true}>
          <Row className="show-grid">
            <Col xs={12} lg={5} id="trailMap" className="map">
              <TrailMap
                markers={this.state.markers}
                selectedMarker={this.state.selectedMarker}
                handleSelection={this.handleSelection}
              />
            </Col>
            <Col
              xs={12}
              lg={7}
              id="trailInterestSpots"
              className="trail-markers"
            >
              <TrailInterestSpotList
                markers={this.state.markers}
                selectedMarker={this.state.selectedMarker}
                handleSelection={this.handleSelection}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
    )
  }
}

export default App
