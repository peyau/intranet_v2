import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function MyCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = date => {
    setSelectedDate(date);
    console.log('Date sélectionnée :', date);
  };

  return (
    <div>
      <h2>Calendrier</h2>
      <Calendar onChange={handleDateChange} value={selectedDate} />
    </div>
  );
}

export default MyCalendar;
