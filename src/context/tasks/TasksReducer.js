const tasksReducer = (state, action) => {
  switch(action.type){
    case 'ADD_TASK':
      return {
        ...state,
        taskItems: [...state.taskItems, action.payload]
      }
    case 'DELETE_TASK':
      return {
        ...state,
        taskItems: state.taskItems.filter(taskItem => taskItem.id !== action.payload.id)
      }
    case 'IS_DONE':
      return {
        ...state,
        taskItems: state.taskItems.map(taskItem => taskItem.id === action.payload.id ? {...taskItem, isDone: !taskItem.isDone} : taskItem)
      }
    case 'CLEAR_ALL':
      return {
        ...state,
        taskItems: []
      }
      default: 
      return state
  }
}

export default tasksReducer;