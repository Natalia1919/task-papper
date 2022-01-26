import React from 'react';
import TaskItem from './TaskItem';


class TaskList extends React.Component{
  render() {
    const {handleDone,deleteTask} = this.props;
    console.log(handleDone)
    console.log(deleteTask)
    return (
      <div className="container">
        {
          this.props.todoTasks.length 
          ? (<ul className='task__list'>
          {
            this.props.todoTasks.map(todoTask => (
              <TaskItem key={todoTask.id} 
              todoTask={todoTask} 
              handleDone={handleDone}
              deleteTask={deleteTask}/>
            ))
          }
        </ul>)
        : (<h2 className='task__title'>Add your first task</h2>)
        }
    </div>
    )
  }
  
};



export default TaskList;
