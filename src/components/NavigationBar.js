import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import PropTypes from 'prop-types'

import './NavigationBar.css'

class NavigationBar extends Component {
  constructor(props) {
    super(props)
    this.handleAbout = this.handleAbout.bind(this)
  }

  handleAbout = (e) => {
    e.preventDefault()
    // collapse the navigation menu
    document.getElementsByClassName('navbar-toggler-icon')[0].click()
    this.props.handleShowModalWindow(true)
  }

  handleLink = () => {
    // collapse the navigation menu
    document.getElementsByClassName('navbar-toggler-icon')[0].click()
  }

  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="https://www.lensoftware.com/presentations/2018-05-28">Upfield Bike Trail</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link eventKey='1' href="https://github.com/TattyFromMelbourne/bike-trail" target="_blank" onClick={(e) => this.handleLink(e)}>Github</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link id='about' eventKey='2' onClick={(e) => this.handleAbout(e)}>About</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

NavigationBar.propTypes = {
  handleShowModalWindow: PropTypes.func.isRequired
};

export default NavigationBar
