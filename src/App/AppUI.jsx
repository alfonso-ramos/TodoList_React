import React from 'react'
import TodoCounter from "../components/TodoCounter"
import TodoSearch from "../components/TodoSearch"
import TodoList from "../components/TodoList"
import TodoItem from "../components/TodoItem"
import CreateTodoButton from "../components/CreateTodoButton"

import { TodoContext } from '../TodoContext'

const AppUI = () => {
    return (
        <div className="AppUI">
            <TodoCounter />
            <TodoSearch />
            <TodoContext.Consumer>
                {({ error,
                    loading,
                    searchedTodos,
                    completeTodo,
                    deleteTodo }) => (
                    <TodoList>
                        {error && <p>Desespérate</p>}
                        {loading && <p>Cargando...</p>}
                        {(!loading && !searchedTodos) && <p>¡Crea tu primer TODO!</p>}

                        {searchedTodos.map(todo => (
                            <TodoItem
                                key={todo.text}
                                text={todo.text}
                                completed={todo.completed}
                                onComplete={() => completeTodo(todo.text)}
                                onDelete={() => deleteTodo(todo.text)}
                            />))}
                    </TodoList>
                )}
            </TodoContext.Consumer>


            <CreateTodoButton />
        </div>
    )
}

export { AppUI }
