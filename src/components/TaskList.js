import React from 'react';
import { useSelector } from 'react-redux';


import TaskItem from './TaskItem';


function TaskList() {
  const taskItems = useSelector(state => state.tasks.taskItems);

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
