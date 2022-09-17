import TodoCounter from "./components/TodoCounter"
import TodoSearch from "./components/TodoSearch"
import TodoList from "./components/TodoList"
import TodoItem from "./components/TodoItem"
import CreateTodoButton from "./components/CreateTodoButton"

const todos = [
  {text: "Tarea1", complete: false},
  {text: "Tarea2", complete: false},
  {text: "Tarea3", complete: false},
]
function App(props) {

  return (
    <div className="App">
      <TodoCounter />

      <TodoSearch />
      <input placeholder="Escribe una tarea" />

      <TodoList>
        {todos.map(todo => (<TodoItem key={todo.text} text={todo.text}/>))}
      </TodoList>

      <CreateTodoButton />
    </div>
  )
}

export default App
