import React, {useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import {addTask, setMsg} from '../redux/tasks/tasksActions';

import Input from '../elements/Input';
import Button from '../elements/Button';

function Form(){
  const [text, setText] = useState('');
  
  const dispatch = useDispatch();
  const taskItems = useSelector(state => state.tasks.taskItems);
  
  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(text.trim().length < 4 || text.trim().length > 25){
      dispatch(setMsg('The task is not correct'));
      setText('');
    }
    else{
      const newTask = {
        text,
        id: uuidv4(),
        isDone: false
      }
      const items = [...taskItems, newTask]
      dispatch(addTask(items));
      setText('');
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