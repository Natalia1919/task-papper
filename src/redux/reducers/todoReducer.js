import { todoActionsTypes } from '../actionsTypes/todoActionsTypes'
const initialState = {
  todoItems: [{
    text: 'first item',
    id: 111
  }]
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
    default:
      return state
  }
}

export default todoReducer;