/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import ('./TaskItem.css'); 

const TaskItem = ({ tareas }) => {

  useEffect(()=>{
  },[tareas])

  return (
    <>
      {tareas && Array.isArray(tareas) && tareas.map((tarea, index) => (
        <li key={index} className="list-group-item customListGrupo">
          <div className="gapDiv">
            <input
              className="form-check-input"
              type="checkbox"
              id={`gridCheck${index}`}
            />
            {tarea}
          </div>
          <div className="gapDiv">
            <Button variant="outline-dark">Edit</Button>
            <Button variant="outline-dark">Delete</Button>
          </div>
        </li>
      ))}
    </>
  );
};

export default TaskItem;