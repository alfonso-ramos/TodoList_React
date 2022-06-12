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
  
  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length

  const searchedTodos = todos.filter (todo => (todo.text.toLowerCase().includes(searchValue.toLowerCase())))

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
          />
        ))}
      </TodoList>

      <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;
