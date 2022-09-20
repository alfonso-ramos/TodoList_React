import React from "react"

import TodoCounter from "./components/TodoCounter"
import TodoSearch from "./components/TodoSearch"
import TodoList from "./components/TodoList"
import TodoItem from "./components/TodoItem"
import CreateTodoButton from "./components/CreateTodoButton"

const defaultTodos = [
  {text: "Tarea1", completed: false},
  {text: "comprar mandado", completed: false},
  {text: "ir a la universidad", completed: false},
  {text: "Terminar el curso de introduccion a react", completed: false},
]
function App(props) {
  const [todos, setTodos] = React.useState(defaultTodos)

  const [searchValue, setSearchValue] = React.useState('')

  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length

  let searchedTodos = []

  if (!searchValue.length >= 1){
    searchedTodos = todos
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()

      return todoText.includes(searchText)
    })
  }

// Metodo para eliminar y terminar tareas
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos[todoIndex].completed = true
    setTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <TodoCounter
        total={totalTodos}
        completed={completedTodos}
      />

      <TodoSearch
        searchValue ={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />))}
      </TodoList>

      <CreateTodoButton />
    </div>
  )
}

export default App
