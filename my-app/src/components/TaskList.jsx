function TaskList({ tareas, setTareas }) {

    const delTask = (i) =>{
        const nuevasTareas = tareas.filter((_, index) => index !== i);
        setTareas(nuevasTareas);
    }

    return (
        <ul>
            {tareas.map((tarea, index) => (
            <li key={index}>{tarea}
            <button style={{marginLeft:10, height:40}}onClick={()=> delTask(index)}>Borrar tarea</button>
            </li>
        ))}
        </ul>
    );
}

export default TaskList;