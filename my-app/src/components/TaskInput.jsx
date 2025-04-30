function TaskInput(props){
    const [tarea, setTarea] = props.elemento;
    return (
        <div>
            <input style={{height:30, textAlign:"center"}} type="text" value={tarea} onChange={e => setTarea(e.target.value)} placeholder="Ingresar tarea" />
            <button style={{padding:5, height:35, marginLeft:15}} >Guardar tarea</button>
        </div>
    );
}
export default TaskInput