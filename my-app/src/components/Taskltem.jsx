import React, { useState } from 'react';

const TaskItem = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  return (
    <div style={{ padding: '8px', borderBottom: '1px solid #ccc' }}>
      <input
        type="text"
        placeholder="Buscar tarea..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          onSearch(e.target.value);
        }}
        style={{ padding: '4px', width: '100%' }}
      />
    </div>
  );
};

export default TaskItem;
