import '../styles/components/TodoItem.css'
const TodoItem = (props) => {
  const onComplete = () => {
    alert('Ya completaste el ToDo ' + props.text)
  }
  const onDelete = () => {
    alert('Se ha eliminado el ToDo ' + props.text)
  }

  return (
    <li className='TodoItem'>
      <span
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={onComplete}
      >
        √
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span
        className='Icon Icon-delete'
        onClick={onDelete}
      >
        X
      </span>
    </li>
  )
}

export default TodoItem
