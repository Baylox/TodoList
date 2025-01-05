import React, { useState, useEffect} from "react"; //useState et useEffect sont des hooks qui permettent de gérer l'état et les effets secondaires dans les composants fonctionnels
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

// Fonctions fléchées pour améliorer la lisibilité du code
function App() {
  const [todos, setTodos] = useState(() => {
    // Charge les données depuis le localStorage et donc n'est plus une liste vide comme précédemment
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

    // Ajoute une nouvelle tâche à la liste
    const addTodo = (text) => {
      const newTodo = { text, completed: false };
      const newTodos = [...todos, newTodo];
      setTodos(newTodos);
    };
    
  // Supprime une tâche de la liste
  const deleteTodo = (index) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this task?");
    if (confirmDelete) {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    }
  };
  
  // Bascule l'état de complétion d'une tâche
  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  // Sauvegarde les données dans le localStorage à chaque mise à jour des tâches
  useEffect(() => {
    if (todos.length > 0 && todos.every((todo) => todo.completed)) {
      alert("Great job! All tasks are complete!");
    }
  }, [todos]);

  // Affiche le formulaire et la liste des tâches
  return (
    <div className="container">
      <h1>Todo List</h1>
      <TodoForm onAdd={addTodo} />
      <TodoList
        todos={todos}
        onDelete={deleteTodo}
        onToggleComplete={toggleComplete}
      />
    </div>
  );
}

export default App;
import './App.css';
