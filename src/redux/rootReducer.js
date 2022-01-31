import { combineReducers } from 'redux';

import tasks from './tasks/tasksReducer';


const rootReducer = combineReducers({
  tasks: tasks
});

export default rootReducer;