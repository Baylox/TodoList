import React from "react";

// Affiche une tâche
function TodoItem({ todo, index, onDelete, onToggleComplete }) {
  return (
    <li>
      <span
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          color: todo.completed ? '#aaa' : '#333',
          cursor: 'pointer',
        }}
        onClick={() => onToggleComplete(index)}
      >
        {todo.text}
      </span>
      <button
        style={{
          background: '#dc3545',
          color: 'white',
          border: 'none',
          padding: '5px 10px',
          borderRadius: '4px',
          marginLeft: '10px',
          cursor: 'pointer',
        }}
        onClick={() => onDelete(index)}
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;


