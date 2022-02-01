import React from 'react';
import {useSelector} from 'react-redux';




function TasksDone() {
  const taskItems = useSelector(state => state.tasks.taskItems);

  const amoutOfDoneTasks =  taskItems.filter(tasksItem => tasksItem.isDone === true).length;

  return (
    <span> Completed: {amoutOfDoneTasks} </span>
  )
}

export default TasksDone;
