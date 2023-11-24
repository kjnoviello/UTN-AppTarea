/* eslint-disable react/prop-types */
import TaskItem from '../TaskItem/TaskItem';

const TaskList = ({tareas, setTareas, handleGuardarTareaEditada, tareaDate }) => {
  return (
    <div className='taskListContainer'>
      <ul className="list-group">
        <TaskItem tareas={tareas} setTareas={setTareas} handleGuardarTareaEditada={handleGuardarTareaEditada} tareaDate={tareaDate}></TaskItem>
      </ul>
    </div>
  )
}

export default TaskList