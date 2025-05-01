import { useState } from "react"
import TaskInput from "./components/TaskInput"
import TaskList from "./components/TaskList"
import TaskItem from "./components/TaskItem";

function App() {
  const [tareas, setTareas] = useState([]);
  const [tarea, setTarea] = useState('');
  return (
    <>
      <div>
        <TaskInput elemento={[tarea, setTarea]} tareas={[tareas, setTareas]}></TaskInput>
        <TaskList tareas={tareas} setTareas={setTareas}></TaskList>
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={() => {}}
          onDelete={() => {}}></TaskItem>
      </div>
    </>
  )
}

export default App