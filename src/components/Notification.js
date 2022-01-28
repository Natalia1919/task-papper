import React, {useContext} from 'react';
import MessageContext from '../context/message/MessageContext';


function Notification() {
  const {notification} = useContext(MessageContext)
  return (
    notification !== null &&
    (<div className='notification container'>
    <p className='notification__text'> * {notification.message}</p>
  </div>)
  )
  }


export default Notification;
