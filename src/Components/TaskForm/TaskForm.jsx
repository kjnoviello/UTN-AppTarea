// import { Button } from 'react-bootstrap'
import { useState } from 'react';
import TaskModal from '../TaskModal/TaskModal';
import TaskList from '../TaskList/TaskList';
import ('./TaskForm.css')

const TaskForm = () => {

  const [tareas, setTareas] = useState([]);

  const handleGuardarTarea = (descripcion) => {
    if (descripcion !="") {
      setTareas([...tareas, descripcion]);
    }
  };

  const handleGuardarTareaEditada = (descripcion, index) => {
    if (descripcion !="") {
      console.log("esto es descripcion", descripcion);
      console.log("esto es tareas", tareas);
      tareas[index] = descripcion;
      setTareas([...tareas]);
    }
  };


  console.log("tareas", tareas);

  return (
    <div className='container-fluid customContainerFluid'>
        <h1><strong>DO.TASK</strong></h1>
        <h4><i>App de tareas</i></h4>
        <br />
        <div className='container-lg customContainer-lg'>
          <TaskModal handleGuardarTarea={handleGuardarTarea} />
        </div>
        <br />
        <br />
          <TaskList tareas={tareas} setTareas={setTareas} handleGuardarTareaEditada={handleGuardarTareaEditada}></TaskList>
    </div>
  )
}

export default TaskForm