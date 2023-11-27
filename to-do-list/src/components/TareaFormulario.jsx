import React from 'react';

const TareaFormulario = (props) => {
  return (
    <form className='tarea-formulario'>
      <input
        className='tarea-input'
        type='text'
        placeholder='insert your task'
        name='texto'
      />
      <button className='tarea-boton'>
        Add your task
      </button>
    </form>
  );
}

export default TareaFormulario;


