const TaskItem = ({ setBusqueda }) => {
  return (
    <div style={{ padding: '8px', borderBottom: '1px solid #ccc' }}>
      <input
        type="text"
        placeholder="Buscar tarea..."
        onChange={(e) => setBusqueda(e.target.value)}
        style={{ padding: '4px', width: '100%' }}
      />
    </div>
  );
};

export default TaskItem;
