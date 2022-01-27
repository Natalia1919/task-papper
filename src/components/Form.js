import React from 'react';

class Form extends React.Component {
  render(){
    return (
      <div className="container">
        <form className='form'
          onSubmit={this.props.handleSubmit}>
            <input 
            type="text" 
            className="form__input"  
            placeholder="Write your task here" 
            value={this.props.text} 
            onChange={e => this.props.handleChange(e.target.value)}/>
            <button className="form__btn" type="submit">
              Add
            </button>
          </form>
        </div>
    )
  }
}

export default Form;