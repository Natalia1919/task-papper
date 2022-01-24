import React from 'react';

class Form extends React.Component{
  render(){
    return (
      <form className='form'>
        <input type="text" className="form__input"  placeholder="Write your task here" />
        <button className="form__btn" type="submit">
          Add
        </button>
      </form>
    )
  }
}

export default Form;