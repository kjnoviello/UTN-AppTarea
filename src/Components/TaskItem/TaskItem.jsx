/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import './TaskItem.css'; 
import Swal from "sweetalert2";

const TaskItem = ({ tareas, setTareas }) => {
  const [checkedTasks, setCheckedTasks] = useState([]);

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
      title: "Eliminar la tarea?",
      showCancelButton: true,
      confirmButtonText: "Eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire("Eliminada!", "", "success");
        setTareas((prevTareas) => {
          const newTareas = [...prevTareas];
          newTareas.splice(index, 1);
          return newTareas;
        });
      }});
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
            {index} {/* BORRAR ESTA LINEA. SOLO ES INFORMATIVO */}
            {checkedTasks[index] ? <strike>{tarea}</strike> : tarea}
          </div>
          <div className="gapDiv">
            <Button variant="outline-dark">
              <i className="ri-edit-line"></i>
            </Button>
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