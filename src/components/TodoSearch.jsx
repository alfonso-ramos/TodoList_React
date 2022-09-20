import  React  from 'react';
import '../styles/components/TodoSearch.css'

const TodoSearch = () => {

  const [searchValue, setSearchValue] = React.useState('');

  const onSearchValueChange = (event) => {
    // console.log(event.target.value);
    setSearchValue(event.target.value)
  }

  return [
    <>
      <input
        className="TodoSearch"
        placeholder="Escribe una tarea"
        value={searchValue}
        onChange={onSearchValueChange}
      />
      <p>{searchValue}</p>
    </>
  ]
}

export default TodoSearch
