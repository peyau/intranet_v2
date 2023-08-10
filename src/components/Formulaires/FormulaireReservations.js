import React, { useState, useEffect } from 'react';

const FormulaireReservations = () => {
  const [showForm, setShowForm] = useState(false);
    const [materiel, setMateriel] = useState('');

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
          <label>Quelle réservation?</label>
          <select
            value={materiel}
            onChange={(e) => setMateriel(e.target.value)}
          >
            <option value="">Sélectionner le type</option>
            <option value="berlingo">Berlingo</option>
            <option value="salle">Salle</option>
          </select>
        </div>
        <button className="form-button">Enregistrer</button>
      </form>
  </div>
  );
};

export default FormulaireReservations;
