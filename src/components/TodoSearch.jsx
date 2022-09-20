import  React  from 'react';
import '../styles/components/TodoSearch.css'

const TodoSearch = ({searchValue, setSearchValue}) => {

  const onSearchValueChange = (event) => {
    console.log(event.target.value)
    setSearchValue(event.target.value)
  }

  return (

      <input
        className="TodoSearch"
        placeholder="Busca una tarea"
        value={searchValue}
        onChange={onSearchValueChange}
      />

  )
}

export default TodoSearch
