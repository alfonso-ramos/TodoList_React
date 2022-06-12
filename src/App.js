import React from 'react'
import {TodoCounter} from './components/TodoCounter'
import {TodoSearch} from './components/TodoSearch'
import {TodoList} from './components/TodoList'
import {TodoItem} from './components/TodoItem'
import {CreateTodoButton} from './components/CreateTodoButton';

import './App.css';

const defaultTodos = [
  {text: 'Hacer el mandado', completed: true},
  {text: 'Tomar el curso de React', completed: false},
  {text: 'Llorar con la llorona', completed: false},
]

function App() {

  const [todos, setTodos] = React.useState(defaultTodos)
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
    setTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    setTodos(newTodos)
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
