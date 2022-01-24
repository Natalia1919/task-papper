import {ReactComponent as Checkbox} from '../assets/check-box.svg';
import {ReactComponent as Trash} from '../assets/trash.svg';
import { removeTask } from '../redux/actions/todoActions';
import {connect} from 'react-redux';

const TaskItem = ({todoTask, removeTodo}) => {
  return (
  <li className='task__item'>
  <button className='btn task__check skipped'>
  <Checkbox className='task__checkbox'/>
  </button>
  <span className="task__text">{todoTask.text}</span>
  <button 
  className="btn task__delete"
  onClick={() => {removeTodo(todoTask)}}>
  <Trash className='task__trash'/>
  </button>
  </li>
  )
};

const mapDispatchToProps = dispatch => ({
  removeTodo: item => dispatch(removeTask(item))
})

export default connect(null, mapDispatchToProps) (TaskItem);
