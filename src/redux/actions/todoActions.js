import { todoActionsTypes } from '../actionsTypes/todoActionsTypes';

export const addTask = (item) => ({
  type: todoActionsTypes.ADD_TASK,
  payload: item
});

export const removeTask = (item) => ({
  type: todoActionsTypes.REMOVE_TASK,
  payload: item
});

export const toggleIsCompleted = () => ({
  type: todoActionsTypes.TOGGLE_IS_COMPLETED
});

export const toggleIsSkipped = () => ({
  type: todoActionsTypes.TOGGLE_IS_SKIPPED
});


