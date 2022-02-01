import React from 'react';
import {useSelector} from 'react-redux';



function TasksUndone() {
  const taskItems = useSelector(state => state.tasks.taskItems);
  
  const amoutOfUndoneTasks =  taskItems.filter(tasksItem => tasksItem.isDone === false).length;

  return (
    <span> Unompleted: {amoutOfUndoneTasks} </span>
  )
}

export default TasksUndone;