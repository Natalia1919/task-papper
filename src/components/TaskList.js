import React, {useContext} from 'react';

import TasksContext from '../context/tasks/TasksContext'
import TaskItem from './TaskItem';


function TaskList() {
  const {taskItems} = useContext(TasksContext);

    return (
      <div className="container">
        {
          taskItems.length > 0
        ? (<ul className='task__list'>
          {
            taskItems.map(task => (
              <TaskItem key={task.id} 
              task={task} 
              />
            ))
          }
        </ul>)
        : (<h2 className='task__title'>Add your first task</h2>)
        }
    </div>
    )
  
}


export default TaskList;
