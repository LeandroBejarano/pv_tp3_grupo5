function TaskList({ tareas }) {
    return (
      <ul>
        {tareas.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    );
  }
  
export default TaskList;