import { useState } from "react"
import TaskInput from "./components/TaskInput"
import TaskList from "./components/TaskList"
import TaskItem from "./components/TaskItem";

function App() {
  const [tareas, setTareas] = useState([]);
  const [tarea, setTarea] = useState('');
  const [busqueda, setBusqueda] = useState('');
  return (
    <>
      <div>
        <TaskInput elemento={[tarea, setTarea]} tareas={[tareas, setTareas]}></TaskInput>
        <TaskList tareas={tareas} setTareas={setTareas}></TaskList>
        <TaskItem onSearch={handleSearch}></TaskItem> 
      </div>
    </>
  )
}

export default App