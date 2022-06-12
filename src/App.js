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

function App() {

  const localStorageTodos = localStorage.getItem('TODOS_V1')
  let parsedTodos;

  if (!localStorageTodos){
    localStorage.setItem('TODOS_V1', JSON.stringify([]))
    parsedTodos = []
  }else{
    parsedTodos = JSON.parse(localStorageTodos)
  }

  const [todos, setTodos] = React.useState(parsedTodos)
  const [searchValue, setSearchValue] = React.useState('');

  //Contador para ToDos completados
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  // toDos en total
  const totalTodos = todos.length

  //Filtro para los todos para que sean buscados en el Input
  const searchedTodos = todos.filter (todo => (todo.text.toLowerCase().includes(searchValue.toLowerCase())))

  const saveTodos  = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos)
    localStorage.setItem('TODOS_V1', stringifiedTodos)
    setTodos(newTodos)
  }

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
