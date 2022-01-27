import React from 'react';
import TaskItem from './TaskItem';
import PropTypes from "prop-types";


class TaskList extends React.Component{
  render() {
    const {handleDone,deleteTask} = this.props;
    return (
      <div className="container">
        {
          this.props.todoTasks.length 
          ? (<ul className='task__list'>
          {
            this.props.todoTasks.map(todoTask => (
              <TaskItem key={todoTask.id} 
              {...todoTask} 
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
}

TaskList.propTypes = {
  handleDone: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  todoTasks: PropTypes.array
}

export default TaskList;
