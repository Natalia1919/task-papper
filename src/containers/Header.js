import React, {useContext} from 'react';
import TasksDone from '../elements/TasksDone';
import TasksUndone from '../elements/TasksUndone';
import TasksContext from '../context/tasks/TasksContext';


function Header() {
  const {taskItems} = useContext(TasksContext)
  return (
  <header className="header">
  <div className="container">
    {
      taskItems.length 
      ? (<div className="header__inner">
      <TasksDone />
      <TasksUndone />
    </div>)
    : (
      <h1 className="header__text">Task papper</h1>
    )
    }
  </div>
  </header>
  );
}

export default Header;
