import React, {useContext} from 'react';

import TasksContext from '../context/tasks/TasksContext';

import TasksDone from '../elements/TasksDone';
import TasksUndone from '../elements/TasksUndone';



function Header() {
  const {taskItems} = useContext(TasksContext);
  
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
