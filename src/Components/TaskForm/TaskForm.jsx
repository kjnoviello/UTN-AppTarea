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

  console.log("tareas", tareas);

  return (
    <div className='container-fluid customContainerFluid'>
        <h1><strong>DO.TASK</strong></h1>
        <h3><i>App de tareas</i></h3>
        <br />
        <div className='container-lg customContainer-lg'>
        <TaskModal onSave={handleGuardarTarea} />
        </div>
        <br />
        <br />
        <TaskList tareas={tareas}></TaskList>
    </div>
  )
}

export default TaskForm