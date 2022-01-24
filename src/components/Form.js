import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import {addTask} from '../redux/actions/todoActions';
import {connect} from 'react-redux';

class Form extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      text: '',
      id: '',
    }
  }

  handleChange = (value) => {
    this.setState({
      text: value,
      id: uuidv4(),
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newTask = this.state;
    console.log(newTask);
    if(newTask.text.trim().length > 3){
      this.props.addNewTask(newTask)
      this.setState({
        text: '',
        id: ''
      })
    }
  }

  
  render(){
    return (
      <form className='form'
      onSubmit={this.handleSubmit}>
        <input 
        type="text" 
        className="form__input"  
        placeholder="Write your task here" 
        value={this.state.text} 
        onChange={e => this.handleChange(e.target.value)}/>
        <button className="form__btn" type="submit">
          Add
        </button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addNewTask: item => dispatch(addTask(item))
})

export default connect(null, mapDispatchToProps)(Form);