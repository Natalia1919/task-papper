import React,{useContext} from 'react';
import TasksContext from '../context/tasks/TasksContext';

function TasksUndone() {
  const { taskItems} = useContext(TasksContext);
   const amoutOfUndoneTasks =  taskItems.filter(tasksItem => tasksItem.isDone === false).length;
  return (
    
    <span> Unompleted: {amoutOfUndoneTasks} </span>
  )
}

export default TasksUndone;