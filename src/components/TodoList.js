import React from "react";
import TodoItem from "./TodoItem";

// Affiche la liste des tâches
function TodoList({ todos, onDelete, onToggleComplete }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          onDelete={onDelete}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </ul>
  );
}

export default TodoList;



