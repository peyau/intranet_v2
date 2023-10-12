import React, { useState } from "react";

const FormReservation = () => {
  const [materiel, setMateriel] = useState("");
  const [reservationType, setReservationType] = useState("");
  const [salle, setSalle] = useState("");
  const [heureDebut, setHeureDebut] = useState("");
  const [heureFin, setHeureFin] = useState("");
  const [motif, setMotif] = useState("");

  // Mock data for options
  const salleOptions = [
    { value: "", label: "Sélectionner la salle" },
    { value: "salle1", label: "Salle 1" },
    { value: "salle2", label: "Salle 2" },
    { value: "salle3", label: "Salle 3" },
  ];

  const materielOptions = [
    { value: "", label: "Sélectionner le matériel" },
    { value: "materiel1", label: "Matériel 1" },
    { value: "materiel2", label: "Matériel 2" },
  ];

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Gérer la soumission du formulaire ici
  };

  const renderReservationFields = () => {
    if (materiel === "berlingo") {
      return (
        <>
          <div className="input-field">
            <label>Nom</label>
            <input type="text" />
          </div>
          <div className="input-field">
            <label>Lieux</label>
            <input type="text" />
          </div>
        </>
      );
    } else if (materiel === "salle") {
      return (
        <>
          <div className="input-field">
            <label>Salle</label>
            <select value={salle} onChange={(e) => setSalle(e.target.value)}>
              {salleOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </>
      );
    } else if (materiel === "materiel") {
      return (
        <>
          <div className="input-field">
            <label>Matériel</label>
            <select>
              {materielOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </>
      );
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="input-field">
        <label>Quelle réservation?</label>
        <select value={materiel} onChange={(e) => setMateriel(e.target.value)}>
          <option value="">Sélectionner le type</option>
          <option value="berlingo">Berlingo</option>
          <option value="salle">Salle</option>
          <option value="materiel">Matériel</option>
        </select>
      </div>
      {renderReservationFields()}
      <div className="date-fields">
        <div className="input-field">
          <label>Heure de début</label>
          <input type="time" />
        </div>
        <div className="input-field">
          <label>Heure de fin</label>
          <input type="time" />
        </div>
      </div>
      <div className="input-field">
        <label>Motif</label>
        <input type="text" />
      </div>
      <button className="form-button">Enregistrer</button>
    </form>
  );
};

export default FormReservation;
