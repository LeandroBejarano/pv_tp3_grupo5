import React from 'react';

const TaskItem = ({ task, onToggleComplete, onDelete }) => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '8px',
      borderBottom: '1px solid #ccc'
    }}>
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleComplete(task.id)}
        />
        <span style={{
          marginLeft: '8px',
          textDecoration: task.completed ? 'line-through' : 'none'
        }}>
          {task.text}
        </span>
      </div>
      <button onClick={() => onDelete(task.id)} style={{ color: 'red' }}>
        Eliminar
      </button>
    </div>
  );
};

export default Taskltem;
