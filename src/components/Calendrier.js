import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useDateContext } from "./DateContext"; // Chemin à adapter

function Calendrier() {
  const { selectedDate, setSelectedDate } = useDateContext();

  const handleDateChange = (date) => {
    setSelectedDate(date);
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
