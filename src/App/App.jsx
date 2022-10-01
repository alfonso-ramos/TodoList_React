import React from "react"
import { AppUI } from "./AppUI"

const defaultTodos = [
  {text: "Tarea1", completed: false},
  {text: "comprar mandado", completed: false},
  {text: "ir a la universidad", completed: false},
  {text: "Terminar el curso de introduccion a react", completed: false},
]


// CustoHook para el localStorage
// Recibe como parametros el nombre y el estado incial
function useLocalStorage(itemName, initialValue){

  const [loading, setLoading] = React.useState(true)
  const [item, setItem] = React.useState(initialValue)

  React.useEffect(() => {
    setTimeout(() => {
      // Se guarda el item en una constante
      const localStorageItem = localStorage.getItem(itemName)
      let parsedItem;

      if(!localStorageItem){
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
      } else {
        parsedItem = JSON.parse(localStorageItem)
      }

      setItem(parsedItem);
      setLoading(false)
    }, 1500)
  })

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem)
    localStorage.setItem(itemName , stringifiedItem)
    setItem(newItem)
  }

  return {
    item,
    saveItem,
    loading,
  };
}


function App() {

  const {
    item: todos,
    saveItem:saveTodos,
    loading
  } = useLocalStorage('TODOS_V1', []);

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
    saveTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }

  React.useEffect(() => {

  })
  return (
    <>
      <AppUI
        loading={loading}
        totalTodos={totalTodos}
        completedTodos={completedTodos}

        searchValue={searchValue}
        setSearchValue={setSearchValue}

        searchedTodos={searchedTodos}

        completeTodo={completeTodo}
        deleteTodo={deleteTodo}

      />
    </>
  )
}

export default App
