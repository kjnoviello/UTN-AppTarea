/* eslint-disable react/prop-types */
import TaskItem from '../TaskItem/TaskItem';

const TaskList = ({tareas}) => {
  return (
    <div className='taskListContainer'>
      <ul className="list-group">
        <TaskItem tareas={tareas}></TaskItem>
      </ul>
    </div>
  )
}

export default TaskList