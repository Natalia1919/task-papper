import React from "react";
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {TasksProvider} from './context/tasks/TasksContext';
import {MessageProvider} from './context/message/MessageContext';






ReactDOM.render(
  <React.StrictMode>
    <TasksProvider>
    <MessageProvider>
    <App />
    </MessageProvider>
    </TasksProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

