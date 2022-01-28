import React,{useContext} from 'react';
import TasksContext from '../context/tasks/TasksContext';

function TasksDone() {
  const {taskItems} = useContext(TasksContext);
   const amoutOfDoneTasks =  taskItems.filter(tasksItem => tasksItem.isDone === true).length;
  return (
    <span> Completed: {amoutOfDoneTasks} </span>
  )
}

export default TasksDone;
