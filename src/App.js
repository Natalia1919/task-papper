import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Period from './components/Period';
import TaskList from './components/TaskList';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      taskItems: [],
      currentItem:{
        text: '',
        id: '',
        isCompleted: false
      }
    }
  }
  handleChange = (value) => {
    this.setState({
      currentItem: {
        text: value,
        id: uuidv4(),
        isCompleted: false
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newTask = this.state.currentItem;
    if(newTask.text.trim().length > 3){
      this.setState({
        taskItems: [...this.state.taskItems, newTask],
        currentItem: {
          text: '',
          id: '',
          isCompleted: false
        }
      });
    }
  }

  handleDone = (id) => {
    this.setState((prevState) => {
      return {
        taskItems: prevState.taskItems.map(taskItem => {
          return taskItem.id === id ?{...taskItem, isCompleted: !taskItem.isCompleted} : taskItem})
      }
    })
  }

  deleteTask = (id) => {
    this.setState((prevState) => {
      return {
        taskItems: [...prevState.taskItems.filter(taskItem => {
          return taskItem.id !== id
        })]
      }
    })
  }
  render(){
    return(
      <div className="wrapper">
      <main className="main">
      <Period />
      <TaskList todoTasks={this.state.taskItems}
      handleDone={this.handleDone}
      deleteTask={this.deleteTask}/>
      </main>
    
    
      <footer className="footer">
        <div className="container">
        <form className='form'
          onSubmit={this.handleSubmit}>
            <input 
            type="text" 
            className="form__input"  
            placeholder="Write your task here" 
            value={this.state.currentItem.text} 
            onChange={e => this.handleChange(e.target.value)}/>
            <button className="form__btn" type="submit">
              Add
            </button>
          </form>
        </div>
      </footer>
      </div>
    )
  
  }
} 

export default App;