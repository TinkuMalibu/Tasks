import './App.css';
import Todolist from './images/Todolist.png';

function App() {
  return (
    <div className="aplicación-tareas">
      <div className="logo-contenedor">
        <img src={Todolist}
        className='todo-logo'
        alt='a woman working' />

      </div>
    </div>
  );
}

export default App;
