import React from 'react';
import { TodoContext } from '../todoContext';
import '../styles/TodoSearch.css'

function TodoSearch(){
    const {searchValue, setSearchValue} = React.useContext(TodoContext)

    const onSearchValueChange = (event) =>{
        setSearchValue(event.target.value)
    }

    return(
        <input
            className='TodoSearch'
            placeholder="Buscar"
            value={searchValue}
            onChange={onSearchValueChange}
        />
    )
}

export {TodoSearch}