import TaskItem from './TaskItem';

const TaskList = () => {
  return (
    <div className="container">
  <ul className='task__list'>
    <TaskItem />
  </ul>
  </div>
  )
};

export default TaskList;
