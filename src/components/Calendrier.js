import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useDateContext } from "./DateContext"; // Chemin à adapter
import { useNavigate } from "react-router-dom";

const Calendrier = () => {
  const { selectedDate, setSelectedDate } = useDateContext();
  const navigate = useNavigate();

  const handleDateChange = (date) => {
    setSelectedDate(date);
    navigate("/"); // Redirige vers la page d'accueil
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
};

export default Calendrier;
