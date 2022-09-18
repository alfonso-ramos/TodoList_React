import TodoCounter from "./components/TodoCounter"
import TodoSearch from "./components/TodoSearch"
import TodoList from "./components/TodoList"
import TodoItem from "./components/TodoItem"
import CreateTodoButton from "./components/CreateTodoButton"

const todos = [
  {text: "Tarea1", completed: false},
  {text: "Tarea2", completed: true},
  {text: "Tarea3", completed: false},
]
function App(props) {

  return (
    <div className="App">
      <TodoCounter />

      <TodoSearch />

      <TodoList>
        {todos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}/>))}
      </TodoList>

      <CreateTodoButton />
    </div>
  )
}

export default App
