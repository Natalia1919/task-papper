import React, {createContext, useReducer, useEffect} from 'react';

import messageReducer from './MessageReducer';


const MessageContext = createContext();

export const MessageProvider =({children}) => {
  const initialState = null;

  const [state, dispatch] = useReducer(messageReducer, initialState);

  const setMessage = (message) => dispatch({
    type: 'SET_MESSAGE',
    payload: {message}
  })

  
    useEffect(() => {
      setTimeout(() => dispatch({type: 'DELETE_MESSAGE'}), 3500)
    },[state])   ///read if it can use useEffect inside context

  return <MessageContext.Provider
  value={{
    notification: state,
    setMessage
  }}>
    {children}
  </MessageContext.Provider>
}

/*eslint react/prop-types: 0 */

export default MessageContext;