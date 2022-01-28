import React, {createContext, useReducer} from 'react';

import tasksReducer from './TasksReducer';


const TasksContext = createContext();

export const TasksProvider = ({children}) => {
  const initialState = {
    taskItems: []
  }

  const [state, dispatch] = useReducer(tasksReducer, initialState);

  const addTask = (items) => dispatch({
    type: 'ADD_TASK',
    payload: items
  });

  const deleteTask = (items) => dispatch({
    type: 'DELETE_TASK',
    payload: items
  });

  const toggleIsDone = (items) => dispatch({
    type: 'IS_DONE',
    payload: items,
  });


  return <TasksContext.Provider 
  value={{
    taskItems: state.taskItems,
    addTask,
    deleteTask,
    toggleIsDone
  }}>
    {children}
    </TasksContext.Provider>
}

/*eslint react/prop-types: 0 */

  export default TasksContext;