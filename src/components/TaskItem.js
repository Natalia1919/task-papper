import React from 'react'
import {ReactComponent as Trash} from '../assets/trash.svg';
import {ReactComponent as Completed} from '../assets/completed.svg';
import PropTypes from "prop-types";

class TaskItem extends React.Component{
  render(){
    return (
      <li className='task__item'>
        <div className="task__check-button" onClick={() => this.props.handleDone(this.props.id)}>
        <span className="task__check">
        {
          this.props.isCompleted &&
          <Completed />
        }
        </span>
        <span className="task__text">{this.props.text}</span>
        </div>
      <Trash className='task__trash'
      onClick={() => {this.props.deleteTask(this.props.id)}}/>
      </li>
      )
  }
}

TaskItem.propTypes = {
  handleDone: PropTypes.func.isRequired,
  id: PropTypes.string,
  isCompleted: PropTypes.bool,
  text: PropTypes.string,
  deleteTask: PropTypes.func.isRequired,
}

export default TaskItem;


