/* eslint-disable react/prop-types */
import { Fade } from 'react-awesome-reveal';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import TaskModalEdit from '../TaskModalEdit/TaskModalEdit';
import Swal from 'sweetalert2';
import './TaskItem.css';

const TaskItem = ({ tareas, setTareas, handleGuardarTareaEditada, date }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [show, setShow] = useState(false);

  const handleCheck = (index) => {
    const newTareas = [...tareas];
    newTareas[index].completada = !newTareas[index].completada;
    setTareas(newTareas);
  };

  const handleShow = (index) => {
    setSelectedIndex(index);
    setShow(true);
  };

  const handleClose = () => {
    setSelectedIndex(null);
    setShow(false);
  };
  
  const fecha = date();

  const handleDelete = (index) => {
    Swal.fire({
      title: 'Eliminar la tarea?',
      showCancelButton: true,
      confirmButtonText: '<i class="ri-check-line"></i>',
      cancelButtonText: '<i class="ri-close-line"></i>'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Eliminada!',
          icon: 'success',
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1500,
        });
        setTareas((prevTareas) => {
          const newTareas = [...prevTareas];
          newTareas.splice(index, 1);
          return newTareas;
        });
      }
    });
  };

  return (
    <>
    <Fade>
      {tareas.length == 0 ? "" : tareas.map((tarea, index) => (
        <li key={index} className={`list-group-item customListGrupo ${tarea.completada ? 'completada' : ''}`}>
          <div className="gapDiv">
            <input
              className="form-check-input"
              type="checkbox"
              id={`check-${index}`}
              checked={tarea.completada || false}
              onChange={() => handleCheck(index)}
            />
            <div className='containerTarea'>
              <div>
                {fecha}
              </div>
              <strong>{tarea.completada ? <strike>{tarea.resumen}</strike> : tarea.resumen}</strong>
            </div>
          </div>
          <div className="gapDiv">
            <Button variant="outline-dark" onClick={() => handleShow(index)}>
              <i className="ri-edit-line"></i>
            </Button>
            {show ? (
              <TaskModalEdit
                show={show}
                setShow={setShow}
                handleClose={handleClose}
                tareas={tareas}
                index={selectedIndex}
                handleGuardarTareaEditada={handleGuardarTareaEditada}
                date={date}
              />
              ) : (
                <></>
              )}
            <Button variant="outline-dark" onClick={() => handleDelete(index)}>
              <i className="ri-delete-back-2-line"></i>
            </Button>
          </div>
        </li>
      ))}
    </Fade>
    </>
  );
};

export default TaskItem;


