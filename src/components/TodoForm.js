import React, { useState } from "react";

// Formulaire pour ajouter une tâche
function TodoForm({ onAdd }) {
  // Gestion de la la valeur 
  const [input, setInput] = useState("");

  // Gère la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return; // Ne pas ajouter de tâches vides
    onAdd(input); // Appelle la fonction onAdd passée depuis App.js
    setInput(""); // Réinitialise le champ
  };
  // Affiche le formulaire
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;




