import React from 'react';
import '../styles/TodoSearch.css'

function TodoSearch({searchValue, setSearchValue}){

    const onSearchValueChange = (event) =>{
        setSearchValue(event.target.value)
        // console.log(event.target.value)
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