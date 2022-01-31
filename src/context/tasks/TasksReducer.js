const tasksReducer = (state, action) => {
  switch(action.type){
    case 'ADD_TASK':
      return {
        ...state,
        taskItems: action.payload
      }
    case 'DELETE_TASK':
      return {
        ...state,
        taskItems: action.payload
      }
    case 'IS_DONE':
      return {
        ...state,
        taskItems: action.payload
      }
      default: 
      return state
  }
}

export default tasksReducer;