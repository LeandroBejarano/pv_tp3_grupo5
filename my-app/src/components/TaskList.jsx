function TaskList({ tareas, setTareas, busqueda }) {
    const tareasFiltradas = tareas.filter(t => t.toLowerCase().includes(busqueda.toLowerCase()));

    const delTask = (i) =>{
        const nuevasTareas = tareas.filter((_, index) => index !== i);
        setTareas(nuevasTareas);
    }

    return (
        <ul>
            {tareasFiltradas.map((tarea, index) => (
            <li key={index}>
                {tarea}
                <button onClick={() => delTask(index)}>Borrar tarea</button>
            </li>
        ))}
        </ul>
    );
}

export default TaskList;