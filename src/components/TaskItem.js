import React, {useContext} from 'react';
import PropTypes from 'prop-types'


import {ReactComponent as Trash} from '../assets/trash.svg';
import {ReactComponent as Completed} from '../assets/completed.svg';

import TasksContext from '../context/tasks/TasksContext';


function TaskItem({task}){
  const {deleteTask, toggleIsDone} = useContext(TasksContext);
    return (
      <li className='task__item'>
        <div className="task__check-button" onClick={() => {toggleIsDone(task)}}>
        <span className="task__check">
        {
          task.isDone &&
          <Completed />
        }
        </span>
        <span className="task__text">{task.text}</span>
        </div>
      <Trash className='task__trash'
      onClick={() => {deleteTask(task)}}/>
      </li>
    )
}

TaskItem.propTypes = {
  task: PropTypes.object
}


export default TaskItem;


