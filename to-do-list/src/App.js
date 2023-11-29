import './App.css';
import LogoToDoList from './components/LogoToDoList.js';
import Tarea from './components/Tarea.jsx'
import ListaDeTareas from './components/ListaDeTareas.jsx';



function App() {
  return (
    <div className="aplicacion-tareas">
      <LogoToDoList />

      <div className='tareas-lista-principal'>
        <h1>DO TO LIST</h1>
          <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
