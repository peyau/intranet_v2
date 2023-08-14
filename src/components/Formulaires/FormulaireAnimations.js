import React, { useState, useEffect } from "react";

const FormulaireAnimations = () => {
  const [showForm, setShowForm] = useState(false);
  const [animation, setAnimation] = useState("");
  const [dates, setDates] = useState([]);
  const [animationData, setAnimationData] = useState({
    name: "",
    description: "",
    startTime: "",
    endTime: "",
    participants: [],
    selectedParticipant: "",
    rooms: [],
    selectedRoom: "",
    dates: [],
    selectedDate: "",
    isPaid: false,
    maxParticipants: "",
    equipment: [],
    selectedEquipment: "",
  });

  const participantsList = ["Participant 1", "Participant 2", "Participant 3"];
  const roomsList = ["Salle 1", "Salle 2", "Salle 3"];
  const equipmentList = ["Matériel 1", "Matériel 2", "Matériel 3"];

  useEffect(() => {
    setShowForm(true);
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(animationData);
  };

  const handleParticipantAdd = (e) => {
    const selectedParticipant = e.target.value;
    if (selectedParticipant) {
      setAnimationData({
        ...animationData,
        participants: [...animationData.participants, selectedParticipant],
        selectedParticipant: "", // Réinitialise le participant sélectionné
      });
    }
  };

  const handleParticipantRemove = (participant) => {
    const updatedParticipants = animationData.participants.filter(
      (p) => p !== participant
    );
    setAnimationData({
      ...animationData,
      participants: updatedParticipants,
    });
  };

  const handleAddDate = (date) => {
    setDates([...dates, date]);
  };

  const handleRemoveDate = (date) => {
    const updatedDates = dates.filter((d) => d !== date);
    setDates(updatedDates);
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
        {animation && (
          <div>
            <div className="input-field">
              <label>Nom de l'animation</label>
              <input
                type="text"
                value={animationData.name}
                onChange={(e) =>
                  setAnimationData({ ...animationData, name: e.target.value })
                }
              />
            </div>
            <div className="input-field">
              <label>Participants</label>
              <select
                value={animationData.selectedParticipant}
                onChange={handleParticipantAdd}
              >
                <option value="">Sélectionner un participant</option>
                {participantsList.map(
                  (participant) =>
                    // Exclure le participant s'il a déjà été ajouté
                    !animationData.participants.includes(participant) && (
                      <option key={participant} value={participant}>
                        {participant}
                      </option>
                    )
                )}
              </select>
              <ul>
                {animationData.participants.map((participant) => (
                  <li key={participant}>
                    {participant}
                    <button
                      type="button"
                      onClick={() => handleParticipantRemove(participant)}
                      className="delete-button"
                    >
                      &#10006;
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="input-field">
              <label>Dates</label>
              <input
                type="date"
                onChange={(e) => handleAddDate(e.target.value)}
              />
              <ul className="added-list">
                {dates.map((date, index) => (
                  <li key={index}>
                    {date}
                    <button
                      className="remove-button"
                      onClick={() => handleRemoveDate(date)}
                    >
                      &#10006;
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <button className="form-button" type="submit">
              Enregistrer
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default FormulaireAnimations;
