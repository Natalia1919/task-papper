import { todoActionsTypes } from '../actionsTypes/todoActionsTypes';

export const addTask = (item) => ({
  type: todoActionsTypes.ADD_TASK,
  payload: item
});

export const removeTask = (item) => ({
  type: todoActionsTypes.REMOVE_TASK,
  payload: item
});

