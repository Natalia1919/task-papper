import {ReactComponent as Checkbox} from '../assets/check-box.svg';
import {ReactComponent as Trash} from '../assets/trash.svg';

const TaskItem = () => {
  return (
  <li className='task__item'>
  <button className='btn task__check skipped'>
  <Checkbox className='task__checkbox'/>
  </button>
  <span className="task__text">Some text </span>
  <button className="btn task__delete">
  <Trash className='task__trash'/>
  </button>
  </li>
  )
};

export default TaskItem;
