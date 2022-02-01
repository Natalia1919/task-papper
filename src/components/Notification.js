import React from 'react';
import { useSelector } from 'react-redux';



function Notification() {
  const notification = useSelector(state => state.tasks.message)

  return (
    notification !== null &&
    (<div className='notification container'>
    <p className='notification__text'> * {notification}</p>
  </div>)
  )
  }


export default Notification;
