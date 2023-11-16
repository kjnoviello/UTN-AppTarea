/* eslint-disable react/prop-types */
import TaskItem from '../TaskItem/TaskItem';

const TaskList = ({tareas, setTareas }) => {
  return (
    <div className='taskListContainer'>
      <ul className="list-group">
        <TaskItem tareas={tareas} setTareas={setTareas}></TaskItem>
      </ul>
    </div>
  )
}

export default TaskList