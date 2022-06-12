import React from 'react'
import {TodoCounter} from './components/TodoCounter'
import {TodoSearch} from './components/TodoSearch'
import {TodoList} from './components/TodoList'
import {TodoItem} from './components/TodoItem'
import {CreateTodoButton} from './components/CreateTodoButton';

import './App.css';

// const defaultTodos = [
//   {text: 'Hacer el mandado', completed: true},
//   {text: 'Tomar el curso de React', completed: false},
//   {text: 'Llorar con la llorona', completed: false},
// ]

function useLocalStorage(itemName, initialValue){

  const [error, setError] = React.useState(false)

  const [loading, setLoading] = React.useState(true)

  const [item, setItem] = React.useState(initialValue)

  React.useEffect(() => {
    setTimeout(() => {
      try{
        const localStorageItem = localStorage.getItem(itemName)
        let parsedItem;
        if (!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = initialValue
        }else{
          parsedItem = JSON.parse(localStorageItem)
        }

        setItem(parsedItem)
        setLoading(false)
      } catch(error) {
        setError(error)
      }
    }, 2000)
  },)

  const saveItem  = (newTodos) => {
    try {
      const stringifiedTodos = JSON.stringify(newTodos)
      localStorage.setItem(itemName, stringifiedTodos)
      setItem(newTodos)
    } catch(error) {
      setError(error)
    }
  }

  return {
    item,
    saveItem,
    loading,
    error,
  }
}

function App() {

  const {item: todos, saveItem: saveTodos, loading } = useLocalStorage('TODOS_V1', [])
  const [searchValue, setSearchValue] = React.useState('');

  //Contador para ToDos completados
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  // toDos en total
  const totalTodos = todos.length

  //Filtro para los todos para que sean buscados en el Input
  const searchedTodos = todos.filter (todo => (todo.text.toLowerCase().includes(searchValue.toLowerCase())))

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos]
    newTodos[todoIndex].completed = true
    saveTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }

  return (
    <React.Fragment>
      <TodoCounter
        total={totalTodos}
        completed={completedTodos}
      />

      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {/* {error && <p>A ocurrido un error, recarga la pagina o vuelve mas tarde</p>} */}
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO</p> }
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={ () => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;
