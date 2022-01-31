    const messageReducer = (state, action) => {
      switch(action.type){
        case 'SET_MESSAGE':
          return action.payload;
        case 'DELETE_MESSAGE':
          return null
        default: 
        return state
      }
    }

    export default messageReducer;