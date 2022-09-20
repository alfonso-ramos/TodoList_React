import '../styles/components/TodoCounter.css'

const TodoCounter = ({total, completed}) => {
  return (
    <div className="TodoCounter">
      <h2>Has completado {completed} de {total} ToDo's</h2>
    </div>
  )
}

export default TodoCounter
