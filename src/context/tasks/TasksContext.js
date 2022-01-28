import React, {createContext, useReducer} from 'react';
import tasksReducer from './TasksReducer';



const TasksContext = createContext();

export const TasksProvider = ({children}) => {
  const initialState = {
    taskItems: []
  }

  const [state, dispatch] = useReducer(tasksReducer, initialState);

  const addTask = (item) => dispatch({
    type: 'ADD_TASK',
    payload: item
  });

  const deleteTask = (item) => dispatch({
    type: 'DELETE_TASK',
    payload: item
  });

  const toggleIsDone = (item) => dispatch({
    type: 'IS_DONE',
    payload: item,
  })

  const clearAll = () => dispatch({
    type: 'CLEAR_ALL'
  })


  return <TasksContext.Provider 
  value={{
    taskItems: state.taskItems,
    addTask,
    deleteTask,
    toggleIsDone,
    clearAll,
  }}>
    {children}
    </TasksContext.Provider>
}

/*eslint react/prop-types: 0 */

  export default TasksContext;