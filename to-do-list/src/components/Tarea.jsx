import React from 'react';
import '../stylesheets/Tarea.css';


  const Tarea = ( {texto} ) => {
    return (
      <div className="tarea-contenedor">
        <div className="tarea-texto">
          {texto}
        </div>
        <div className="tarea-icono">
          eliminar
        </div>
      </div>
    );
  }

  export default Tarea;
