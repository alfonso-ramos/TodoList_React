import React from "react"
import { TodoProvider } from "../TodoContext"
import { AppUI } from "./AppUI"

// const defaultTodos = [
//   {text: "Tarea1", completed: false},
//   {text: "comprar mandado", completed: false},
//   {text: "ir a la universidad", completed: false},
//   {text: "Terminar el curso de introduccion a react", completed: false},
// ]





function App() {
  React.useEffect(() => {

  })
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  )
}

export default App
