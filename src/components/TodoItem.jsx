import React from 'react'

const TodoItem = (props) => {
  return (
    <div className='TodoItem'>
      <li>
        <span>C</span>
        <p>{props.text}</p>
        <span>X</span>
      </li>
    </div>
  )
}

export default TodoItem
