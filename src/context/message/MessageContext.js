import React, {createContext, useReducer} from 'react';

import messageReducer from './MessageReducer';


const MessageContext = createContext();

export const MessageProvider =({children}) => {
  const initialState = null;

  const [state, dispatch] = useReducer(messageReducer, initialState);

  const setMessage = (message) => dispatch({
    type: 'SET_MESSAGE',
    payload: {message}
  })

  setTimeout(() => dispatch({type: 'DELETE_MESSAGE'}), 3500)


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