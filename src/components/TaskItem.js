import {ReactComponent as Checkbox} from '../assets/check-box.svg';
import {ReactComponent as Trash} from '../assets/trash.svg';
import { removeTask, toggleIsCompleted, toggleIsSkipped } from '../redux/actions/todoActions';
import {connect} from 'react-redux';

const TaskItem = ({todoTask, removeTodo, skipped, completed, handleIsCompleted, handleIsSkipped}) => {
  return (
  <li className='task__item'>
  <button className={ completed ? `btn task__check completed` : `btn task__check`}
  onClick={handleIsCompleted}
  >
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
  removeTodo: item => dispatch(removeTask(item)),
  handleIsCompleted: () => dispatch(toggleIsCompleted()),
  handleIsSkipped: () => dispatch(toggleIsSkipped())
});

 const mapStateToProps = state => ({
   completed: state.todos.isCompleted,
   skipped: state.todos.isSkipped
 })

export default connect(mapStateToProps, mapDispatchToProps) (TaskItem);
