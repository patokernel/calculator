import React from "react"
import '../stylesheets/DeleteButton.css'

const DeleteButton = (props) => {
  return (
    <div className='delete-button' onClick={() => props.handleDelete()}>
      {props.children}
    </div>
  )
}

export default DeleteButton