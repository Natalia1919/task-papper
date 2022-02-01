import React from 'react';
import PropTypes from 'prop-types'

function Button({props, children}) {
  return (
    <button className="form__btn" {...props}>{children}</button>
  )
}

Button.propTypes ={
  children: PropTypes.node,
  props: PropTypes.any
}

export default Button;
