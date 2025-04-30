import { useState } from "react"
import TaskInput from "./components/TaskInput"

function App() {
  const [tarea, setTarea] = useState('');
  return (
    <>
      <div>
      <TaskInput elemento={[tarea, setTarea]}></TaskInput>
      </div>
    </>
  )
}

export default App