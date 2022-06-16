import React from 'react';
import '../styles/CreateTodoButton.css'


function CreateTodoButton(props){

    const onClickButton = () => {
        props.setOpenModal(true)
    }

    return(
        <button
            className='CreateTodoButton'
            onClick={onClickButton}
        >
            +
        </button>
    )
}

export {CreateTodoButton}