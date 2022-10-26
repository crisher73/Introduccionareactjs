import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
const onClickButton = (msg) => {
    alert('aquí se deberia abrir el modal')
}    

  return (
    <button 
        className="CreateTodoButton"
        onClick={() => onClickButton ('aquí se deberia abrir un modal')}
        >
            +
        </button>
  );
}

export { CreateTodoButton };