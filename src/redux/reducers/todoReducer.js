import { todoActionsTypes } from '../actionsTypes/todoActionsTypes'
const initialState = {
  todoItems: [{
    text: 'first item',
    id: 111
  }],
  isCompleted: false,
  isSkipped: false,
}

const todoReducer = (state = initialState, action) => {
  switch(action.type){
    case todoActionsTypes.ADD_TASK:
      return {
        ...state,
        todoItems: [...state.todoItems, action.payload]
      }
    case todoActionsTypes.REMOVE_TASK: {
      return {
        ...state,
        todoItems: [...state.todoItems.filter(todoItem => todoItem.id !== action.payload.id)]
      }
    }
    case todoActionsTypes.TOGGLE_IS_COMPLETED: {
      return {
        ...state,
        isCompleted: !state.isCompleted
      }
    }
    case todoActionsTypes.TOGGLE_IS_SKIPPED: {
      return {
        ...state,
        isSkipped: !state.isSkipped
      }
    }
    default:
      return state
  }
}

export default todoReducer;