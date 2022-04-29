import React from "react"
import '../stylesheets/Button.css'

const Button = (props) => {

  const isOperator = (value) => {
    return isNaN(value) && (value !== '.') && (value !== '=');
  }

  const isZero = (value) => {
    return (value === '0')
  }

  const isEqual = (value) => {
    return (value === '=')
  }

  return (
    <div
      className={`button-container ${isOperator(props.children) ? 'operator' : ''}${isZero(props.children) ? 'zero' : ''}${isEqual(props.children) ? 'equal' : ''}`.trimEnd()}
      onClick={() => props.handleInput(props.children)}
    >
      {props.children}
    </div>
  )
}

export default Button