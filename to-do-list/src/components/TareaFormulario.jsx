import React, { useState } from 'react';
import '../stylesheets/TareaFormulario.css'

const TareaFormulario = (props) => {

  const [input, setInput] = useState('');

  const manejarCambio = e => {
    setInput(e.target.value);
  }

  const manejarEnvio = e => {
    e.preventDefault();
      const tareaNueva = {
      id: '3554',
      texto:'input',
      completada: false
    }
  }

  return (
    <form
    className='tarea-formulario'
    onSubmit={ manejarEnvio } >
      <input
        className='tarea-input'
        type='text'
        placeholder='Write a task'
        name='texto'
        onChange= {manejarCambio}
      />
      <button className='tarea-boton'>
        Add your task
      </button>
    </form>
  );
}

export default TareaFormulario;
