import '../styles/components/TodoSearch.css'

const TodoSearch = () => {
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
  }

  return (
    <input
      className="TodoSearch"
      placeholder="Escribe una tarea"
      onChange={onSearchValueChange}
    />
  )
}

export default TodoSearch
