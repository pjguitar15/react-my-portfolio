import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
const ModalDisplay = () => {
  const [lgShow, setLgShow] = useState(true)
  return (
    <div>
      <Modal
        size='lg'
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby='example-modal-sizes-title-lg'
      >
        <Modal.Header closeButton>
          <Modal.Title id='example-modal-sizes-title-lg'>
            Large Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
    </div>
  )
}

export default ModalDisplay
