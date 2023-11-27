import React from 'react';
import TodolistImage from '../images/Todolist.png';
import '../stylesheets/logo.css'


const LogoToDoList = ( ) => {
  return (

      <div className="logo-contenedor">
        <img src= { TodolistImage }
        className='todo-logo'
        alt='a woman working' />
      </div>

  );
}

export default LogoToDoList;
