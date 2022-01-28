import React, {useState, useContext} from "react";
import { v4 as uuidv4 } from 'uuid';

import Input from '../elements/Input';
import Button from '../elements/Button';
import TasksContext from '../context/tasks/TasksContext';
import MessageContext from '../context/message/MessageContext';

function Form(){
  const [text, setText] = useState('');
  const {addTask} = useContext(TasksContext);
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
      addTask(newTask);
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