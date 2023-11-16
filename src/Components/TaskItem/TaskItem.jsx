/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import TaskModalEdit from '../TaskModalEdit/TaskModalEdit';
import Swal from 'sweetalert2';
import './TaskItem.css';

const TaskItem = ({ tareas, setTareas, handleGuardarTareaEditada }) => {
  const [checkedTasks, setCheckedTasks] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const [show, setShow] = useState(false);

  const handleShow = (index) => {
    setSelectedIndex(index);
    setShow(true);
  };

  const handleClose = () => {
    setSelectedIndex(null);
    setShow(false);
  };

  useEffect(() => {
    setCheckedTasks(new Array(tareas.length).fill(false));
  }, [tareas]);

  const handleCheck = (index) => {
    setCheckedTasks((prevCheckedTasks) => {
      const newCheckedTasks = [...prevCheckedTasks];
      newCheckedTasks[index] = !newCheckedTasks[index];
      return newCheckedTasks;
    });
  };

  const handleDelete = (index) => {
    Swal.fire({
      title: 'Eliminar la tarea?',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
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
      {tareas.map((tarea, index) => (
        <li key={index} className="list-group-item customListGrupo">
          <div className="gapDiv">
            <input
              className="form-check-input"
              type="checkbox"
              id={`check-${index}`}
              checked={checkedTasks[index] || false}
              onChange={() => handleCheck(index)}
            />
            {checkedTasks[index] ? <strike>{tarea}</strike> : tarea}
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
              />
            ) : (
              <></>
            )}
            <Button variant="outline-dark" onClick={() => handleDelete(index)}>
              <i className="ri-delete-bin-2-line"></i>
            </Button>
          </div>
        </li>
      ))}
    </>
  );
};

export default TaskItem;