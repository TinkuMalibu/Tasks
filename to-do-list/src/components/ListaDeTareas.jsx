import React, { useState } from 'react';
import TareaFormulario from './TareaFormulario';
import '../stylesheets/ListaDeTareas.css';
import Tarea from './Tarea';


const ListaDeTareas = () => {

  const[tareas, SetTareas] = useState([]);

  const agregarTarea = tarea => {
    console.log('Tarea Agregada');
    console.log('tarea');
  }

  return (
    <>
      <TareaFormulario />
      <div className='tareas-lista-contenedor'>
        {
          tareas.map((tarea) =>
          <Tarea
          texto ={tarea.texto}
          completada={tarea.completada}
          />

          )

        }
      </div>
    </>
  );
}

export default ListaDeTareas;
