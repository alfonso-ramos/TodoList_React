import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', [])
    const [searchValue, setSearchValue] = React.useState('');

    //Para abrir o cerrar el modal
    const [openModal, setOpenModal] = React.useState(false)

    //Contador para ToDos completados
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    // toDos en total
    const totalTodos = todos.length

    //Filtro para los todos para que sean buscados en el Input
    const searchedTodos = todos.filter(todo => (todo.text.toLowerCase().includes(searchValue.toLowerCase())))

    const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos]
        newTodos[todoIndex].completed = true
        saveTodos(newTodos)
    }

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos]
        newTodos.splice(todoIndex, 1)
        saveTodos(newTodos)
    }


    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal
        }
    }>
            { props.children }
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }