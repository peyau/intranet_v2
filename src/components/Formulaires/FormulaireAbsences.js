import React, { useState } from "react";
import AnimatedContainer from "../AnimatedContainer";

const FormulaireAbsences = () => {
  const [selectedOption, setSelectedOption] = useState("self");
  const [absentName, setAbsentName] = useState("");
  const [absenceType, setAbsenceType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Gérer la soumission du formulaire ici
  };

  return (
    <AnimatedContainer containerClass="form-container">
      <form onSubmit={handleFormSubmit}>
        <div className="radio-button-selector">
          <label
            className={selectedOption === "self" ? "selected" : ""}
            onClick={() => setSelectedOption("self")}
          >
            <input
              type="radio"
              value="self"
              checked={selectedOption === "self"}
              onChange={handleOptionChange}
            />
            Encoder une absence pour moi
          </label>
          <label
            className={selectedOption === "colleague" ? "selected" : ""}
            onClick={() => setSelectedOption("colleague")}
          >
            <input
              type="radio"
              value="colleague"
              checked={selectedOption === "colleague"}
              onChange={handleOptionChange}
            />
            Encoder une absence pour un collègue
          </label>
        </div>
        {selectedOption === "colleague" && (
          <div className="input-field">
            <label>Nom de l'absent:</label>
            <input
              type="text"
              value={absentName}
              onChange={(e) => setAbsentName(e.target.value)}
            />
          </div>
        )}
        <div className="input-field">
          <label>Type d'absence:</label>
          <select
            value={absenceType}
            onChange={(e) => setAbsenceType(e.target.value)}
          >
            <option value="">Sélectionner le type</option>
            <option value="conge">Congé</option>
            <option value="conge_social">Congé social</option>
            <option value="maladie">Maladie</option>
          </select>
        </div>
        <div className="date-fields">
          <div className="input-field">
            <label>Date de début:</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="input-field">
            <label>Date de fin:</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>
        <div className="input-field">
          <label>Description:</label>
          <input
            type="text"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </div>
        <button className="form-button">Enregistrer</button>
      </form>
    </AnimatedContainer>
  );
};

export default FormulaireAbsences;
