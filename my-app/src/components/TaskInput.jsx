function TaskInput(props){
    const [tarea, setTarea] = props.elemento;
    const [tareas, setTareas] = props.tareas;


    const handleAdd = () =>{
        if (tarea && !tareas.includes(tarea)){
            setTareas([...tareas, tarea]);
            setTarea("");
        }
        else
            alert("Error, tarea ya registrada");
    };

    return (
        <div>
            <input style={{height:30, textAlign:"center"}} type="text" value={tarea} onChange={e => setTarea(e.target.value)} placeholder="Ingresar tarea" />
            <button style={{padding:5, height:35, marginLeft:15}} onClick={handleAdd}  >Guardar tarea</button>
        </div>
    );
}
export default TaskInput