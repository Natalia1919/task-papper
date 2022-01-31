import * as type from './tasksTypes'

const initialState = {
  taskItems: []
}

const tasks = (state = initialState, action) => {
  switch(action.type){
    case type.ADD_TASK: 
    return {
      ...state,
      taskItems: action.payload
    }
    case type.DELETE_TASK: 
    return {
      ...state,
      taskItems: action.payload
    }
    case type.IS_DONE: 
    return {
      ...state,
      taskItems: action.payload
    }
    default: 
    return state
  }
}

export default tasks;