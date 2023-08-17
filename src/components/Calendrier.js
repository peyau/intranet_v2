import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useNavigate } from "react-router-dom";

function Calendrier() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const navigate = useNavigate();

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log("Date sélectionnée :", date);
    navigate("/", { state: { selectedDate: date } }); // Redirige vers la page d'accueil avec la date
  };

  return (
    <div>
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
        showWeekNumbers
      />
    </div>
  );
}

export default Calendrier;
