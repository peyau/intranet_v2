import React, { useState } from "react";

const FormulaireAbsences = () => {
  const [absenceType, setAbsenceType] = useState("conge");
  const [absenceDate, setAbsenceDate] = useState("");
  const [absenceDuration, setAbsenceDuration] = useState("full-day");
  const [startTime, setStartTime] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reason, setReason] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Gérer la soumission du formulaire ici
  };

  return (
    <div className="form-container">
      <form className="generic-form" onSubmit={handleFormSubmit}>
        <label htmlFor="absence-type">Type d'absence :</label>
        <select
          id="absence-type"
          className="generic-select"
          value={absenceType}
          onChange={(e) => setAbsenceType(e.target.value)}
        >
          <option value="conge">Congé</option>
          <option value="conge-social">Congé Social</option>
          <option value="maladie">Maladie</option>
        </select>
        <label htmlFor="absence-date">Date d'absence :</label>
        <input
          type="date"
          id="absence-date"
          className="generic-input"
          value={absenceDate}
          onChange={(e) => setAbsenceDate(e.target.value)}
          required
        />
        <label htmlFor="absence-duration">Durée :</label>
        <select
          id="absence-duration"
          className="generic-select"
          value={absenceDuration}
          onChange={(e) => setAbsenceDuration(e.target.value)}
        >
          <option value="half-day">Demi-journée</option>
          <option value="full-day">Journée complète</option>
          <option value="multiple-days">Plusieurs jours</option>
        </select>
        {absenceDuration === "half-day" && (
          <div className="time-input-container">
            <label htmlFor="absence-start-time">Heure de début :</label>
            <input
              type="time"
              id="absence-start-time"
              className="generic-input"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
          </div>
        )}
        <div className="date-input-container">
          <label htmlFor="absence-start-date">Date de début :</label>
          <input
            type="date"
            id="absence-start-date"
            className="generic-input"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>
        {absenceDuration === "multiple-days" && (
          <div className="date-input-container">
            <label htmlFor="absence-end-date">Date de fin :</label>
            <input
              type="date"
              id="absence-end-date"
              className="generic-input"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        )}

        <button type="submit" className="form-button">
          Soumettre
        </button>
      </form>
    </div>
  );
};

export default FormulaireAbsences;
