import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import PropTypes from 'prop-types'

class ModalWindow extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.handleClose = this.handleClose.bind(this)
  }

  handleClose() {
    this.props.handleShowModalWindow(false)
  }

  render() {
    return (
      <div>
        <Modal show={this.props.showModalWindow} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>About</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>Author: Tatiana Lenz</h5>
            <p>
              This is an exerecise to map some of my favourite places along the
              Upfield Bike Trail.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="info" onClick={this.handleClose}>OK</Button>
            <Button variant="secondary" onClick={this.handleClose}>Cancel</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

ModalWindow.propTypes = {
  handleShowModalWindow: PropTypes.func.isRequired,
  showModalWindow: PropTypes.bool.isRequired
};

export default ModalWindow
