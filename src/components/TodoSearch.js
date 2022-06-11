import React from 'react';
import '../styles/TodoSearch.css'

function TodoSearch(){

    const [searchValue, setSearchValue] = React.useState('')

    const onSearchValueChange = (event) =>{
        setSearchValue(event.target.value)
        console.log(event.target.value)
    }

    return[
        <input
            className='TodoSearch'
            placeholder="Nuevo TODO"
            value={searchValue}
            onChange={onSearchValueChange}
        />,
        <p>{searchValue}</p>
    ]
}

export {TodoSearch}