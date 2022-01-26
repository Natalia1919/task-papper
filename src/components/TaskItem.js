import React from 'react'
import {ReactComponent as Trash} from '../assets/trash.svg';
import {ReactComponent as Completed} from '../assets/completed.svg';

class TaskItem extends React.Component{
  render(){
    return (
      <li className='task__item'>
        <div className="task__check-button" onClick={() => this.props.handleDone(this.props.todoTask.id)}>
        <span className="task__check">
        {
          this.props.todoTask.isCompleted &&
          <Completed />
        }
        </span>
        <span className="task__text">{this.props.todoTask.text}</span>
        </div>
      <Trash className='task__trash'
      onClick={() => {this.props.deleteTask(this.props.todoTask.id)}}/>
      </li>
      )
  }
};

export default TaskItem;


