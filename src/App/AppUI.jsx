import React from 'react'
import TodoCounter from "../components/TodoCounter"
import TodoSearch from "../components/TodoSearch"
import TodoList from "../components/TodoList"
import TodoItem from "../components/TodoItem"
import CreateTodoButton from "../components/CreateTodoButton"


const AppUI = ({
    loading,
    error,

    totalTodos,
    completedTodos,

    searchValue,
    setSearchValue,

    searchedTodos,

    completeTodo,
    deleteTodo,
}) => {
    return (
        <div className="AppUI">
            <TodoCounter
                total={totalTodos}
                completed={completedTodos}
            />


            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />

            {error && <p>Desespérate</p>}
            {loading && <p>Cargando...</p>}
            {(!loading && !searchedTodos) && <p>¡Crea tu primer TODO!</p>}

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

export { AppUI }
