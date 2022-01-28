import React, {useContext} from 'react';
import PropTypes from 'prop-types'

import TasksContext from '../context/tasks/TasksContext';

import {ReactComponent as Trash} from '../assets/trash.svg';
import {ReactComponent as Completed} from '../assets/completed.svg';





function TaskItem({task}){
  const {taskItems, deleteTask, toggleIsDone} = useContext(TasksContext);

  const isCompleted = taskItems.map((taskItem) => taskItem.id === task.id ? {...taskItem, isDone: !taskItem.isDone} : taskItem);
  const deletedTask = taskItems.filter((taskItem) => taskItem.id !== task.id);

    return (
      <li className='task__item'>
        <div className="task__check-button" onClick={() => {toggleIsDone(isCompleted)}}>
        <span className="task__check">
        {
          task.isDone &&
          <Completed />
        }
        </span>
        <span className="task__text">{task.text}</span>
        </div>
      <Trash 
      className='task__trash'
      onClick={() => {deleteTask(deletedTask)}}/>
      </li>
    )
}

TaskItem.propTypes = {
  task: PropTypes.object
}


export default TaskItem;


