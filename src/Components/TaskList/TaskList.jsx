/* eslint-disable react/prop-types */
import TaskItem from '../TaskItem/TaskItem';

const TaskList = ({tareas, setTareas, handleGuardarTareaEditada, date }) => {
  return (
    <div className='taskListContainer'>
      <ul className="list-group">
        <TaskItem tareas={tareas} setTareas={setTareas} handleGuardarTareaEditada={handleGuardarTareaEditada} date={date}></TaskItem>
      </ul>
    </div>
  )
}

export default TaskList