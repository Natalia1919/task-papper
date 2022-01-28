import React, {useState, useContext} from "react";
import { v4 as uuidv4 } from 'uuid';

import TasksContext from '../context/tasks/TasksContext';
import MessageContext from '../context/message/MessageContext';

import Input from '../elements/Input';
import Button from '../elements/Button';

function Form(){
  const [text, setText] = useState('');

  const {taskItems, addTask} = useContext(TasksContext);
  const {setMessage} = useContext(MessageContext);

  
  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(text === ''){
      setMessage('The task can be empty')
    }
    else if(text.trim().length < 4){
      setMessage('The task is too small');
    }
    else if(text.trim().length > 25){
      setMessage('The task is too big');
      setText('');
    }
    else {
      const newTask = {
        text,
        id: uuidv4(),
        isDone: false
      }
      const items = [...taskItems, newTask]
      addTask(items);
      setText('')
    }
  }

    return (
      <div className="container">
        <form className="form"
          onSubmit={handleSubmit}>
            <Input 
            type="text"  
            placeholder="Write your task here" 
            value={text} 
            onChange={handleChange}/>
            <Button type="submit">
              Add
            </Button>
          </form>
        </div>
    )
}

export default Form;