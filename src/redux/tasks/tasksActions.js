  import * as type from './tasksTypes';

  export const addTask = (item) => {
    return {
      type: type.ADD_TASK,
      payload: item
    }
  };

  export const deleteTask = (item) => ({
    type: type.DELETE_TASK,
    payload: item
  });

  export const toggleIsDone = (item) => ({
    type: type.IS_DONE,
    payload: item
  });

  export const setMsg = (message) => ({
    type: type.SET_MESSAGE,
    payload: message
  });