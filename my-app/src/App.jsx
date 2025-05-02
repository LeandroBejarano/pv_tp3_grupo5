<<<<<<< HEAD
import { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import TaskItem from "./components/TaskItem";
=======
import { useState } from "react"
import TaskInput from "./components/TaskInput"
import TaskList from "./components/TaskList"
import TaskItem from "./components/TaskItem"
>>>>>>> ca157fed8969443ab23c874d84612b9add7d7373

function App() {
  const [tareas, setTareas] = useState([]);
  const [tarea, setTarea] = useState('');
  const [busqueda, setBusqueda] = useState('');

  return (
    <>
      <div>
        <TaskInput elemento={[tarea, setTarea]} tareas={[tareas, setTareas]}></TaskInput>
        <TaskItem setBusqueda={setBusqueda} />
        <TaskList tareas={tareas} setTareas={setTareas} busqueda={busqueda} />
      </div>
    </>
  )
}

export default App