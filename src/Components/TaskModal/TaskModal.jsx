
/* eslint-disable react/prop-types */
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Swal from 'sweetalert2';
import ('./TaskModal.css')

function TaskModal({ handleGuardarTarea, tareaDate }) {
  const [show, setShow] = useState(false);
  const [descripcion, setDescripcion] = useState('')

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSetDescripcion = (e) => {
    setDescripcion(e.target.value)
  }

  const fecha = tareaDate

  const handleGuardar = () => {
    handleGuardarTarea(descripcion);
    setDescripcion("")
    handleClose();
    if (descripcion !="") {
      Swal.fire({
        title: "Tarea creada.",
        icon: "success",
        position: "top-end",
        toast: true,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        <i className="ri-add-line"></i>
        <p>Nueva tarea</p>
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Nueva tarea</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>{fecha}</Form.Label>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1">
              <Form.Label>Descripcion de la tarea</Form.Label>
              <Form.Control
                autoFocus
                as="textarea"
                rows={3}
                value={descripcion}
                onChange={handleSetDescripcion}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
          <i className="ri-close-line"></i>
          </Button>
          <Button variant="success" onClick={handleGuardar}>
          <i className="ri-save-line"></i>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TaskModal;
