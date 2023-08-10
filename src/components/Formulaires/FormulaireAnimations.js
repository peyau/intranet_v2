import React, { useState, useEffect } from 'react';

const FormulaireAnimations = () => {
  const [showForm, setShowForm] = useState(false);
    const [animation, setAnimation] = useState('');

  useEffect(() => {
    setShowForm(true); // Montrer le formulaire une fois que le composant est monté
  }, []);

    const handleFormSubmit = (event) => {
    event.preventDefault();
    // Gérer la soumission du formulaire ici
  };

  return (
  <div className={`form-container ${showForm ? "fade-in" : "hidden"}`}>
      <form onSubmit={handleFormSubmit}>
        <div className="input-field">
          <label>Quelle animation?</label>
          <select
            value={animation}
            onChange={(e) => setAnimation(e.target.value)}
          >
            <option value="">Sélectionner une animation</option>
            <option value="animation1">Animation1</option>
            <option value="animation2">Animation2</option>
          </select>
        </div>
        <button className="form-button">Enregistrer</button>
      </form>
  </div>
  );
};

export default FormulaireAnimations;