import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Calendrier() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log("Date sélectionnée :", date);
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
