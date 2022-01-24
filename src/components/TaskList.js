import TaskItem from './TaskItem';
import {connect} from 'react-redux';

const TaskList = ({todoTasks}) => {
  return (
    <div className="container">
      {
        todoTasks.length 
        ? (<ul className='task__list'>
        {
          todoTasks.map(todoTask => (
            <TaskItem key={todoTask.id} todoTask={todoTask} />
          ))
        }
      </ul>)
      : (<h2 className='task__title'>Add your first task</h2>)
      }
  
  </div>
  )
};

const mapStateToProps = (state) => ({
  todoTasks: state.todos.todoItems
})

export default connect (mapStateToProps)(TaskList);
