import React from 'react'

const TodoList = (props) => {
  return (
    <ul className='TodoList'>
      {props.children}
    </ul>
  )
}

export default TodoList
