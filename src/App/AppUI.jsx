import React from 'react'
import TodoCounter from "../components/TodoCounter"
import TodoSearch from "../components/TodoSearch"
import TodoList from "../components/TodoList"
import TodoItem from "../components/TodoItem"
import CreateTodoButton from "../components/CreateTodoButton"


const AppUI = ({
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
