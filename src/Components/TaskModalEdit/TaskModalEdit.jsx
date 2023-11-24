/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Swal from 'sweetalert2';
import './TaskModalEdit.css';

function TaskModalEdit({ handleGuardarTareaEditada, show, handleClose, tareas, index, date }) {
  const [descripcion, setDescripcion] = useState(tareas[index].resumen || '');

  useEffect(() => {
    setDescripcion(tareas[index].resumen || '');
  }, [index, tareas]);

  const handleSetDescripcion = (e) => {
    setDescripcion(e.target.value);
  };

  const handleGuardar = () => {
    handleGuardarTareaEditada(descripcion, index);
    
    handleClose();
    if (descripcion !="") {
      Swal.fire({
        title: 'Tarea editada correctamente.',
        icon: 'success',
        position: 'top-end',
        toast: true,
        showConfirmButton: false,
        timer: 1500,
      });
      
    }
  };

  const fecha = date()

  return (
    <>
      <Modal 
        show={show} 
        onHide={handleClose} 
        backdrop="static" 
        keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Editar tarea</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>{fecha}</Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Descripción de la tarea</Form.Label>
              <Form.Control
                autoFocus
                as="textarea" 
                rows={3} 
                value={descripcion} 
                onChange={handleSetDescripcion} />
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

export default TaskModalEdit;