import React from "react"
import '../stylesheets/ClearAllButton.css'

const ClearAllButton = (props) => {
  return (
    <div className='clear-all-button' onClick={() => props.handleClearAll()}>
      {props.children}
    </div>
  )
}

export default ClearAllButton