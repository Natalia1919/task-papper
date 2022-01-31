import React  from 'react';
import {useSelector} from 'react-redux';



import TasksDone from '../elements/TasksDone';
import TasksUndone from '../elements/TasksUndone';



function Header() {
  const taskItems = useSelector(state => state.tasks.taskItems);
  
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
