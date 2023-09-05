import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import "moment/locale/fr";
import ModalCalendrier from "../modals/ModalCalendrier"; // Assure-toi de corriger le chemin d'accès si nécessaire

const localizer = momentLocalizer(moment);

const getEventColor = (title) => {
  if (title.includes("Stage")) {
    return "red";
  } else if (title.includes("Lecture")) {
    return "blue";
  } else {
    return "green";
  }
};

const events = [
  {
    start: new Date(2023, 7, 30, 10),
    end: new Date(2023, 7, 30, 12),
    title: "Lecture au parc",
    info: "Information concernant l'événement 1",
  },
  {
    start: new Date(2023, 7, 30, 10),
    end: new Date(2023, 7, 30, 12),
    title: "Autre event",
    info: "Information de l'autre event",
  },
  {
    start: new Date(2023, 7, 30, 10),
    end: new Date(2023, 7, 31, 12),
    title: "Stage de code",
    info: "Lien vers l'animation ou event avec les infos",
  },
  // ... Ajoutez d'autres événements ici
];

function BigCalendrierRetro() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  const eventStyleGetter = (event) => {
    const backgroundColor = getEventColor(event.title);
    const style = {
      backgroundColor,
      borderRadius: "5px",
      color: "white",
      border: "0px",
      display: "block",
    };
    return { style };
  };

  return (
    <div style={{ height: "850px" }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        eventPropGetter={eventStyleGetter}
        onSelectEvent={handleEventClick}
        showMultiDayTimes={true}
      />

      <ModalCalendrier
        selectedEvent={selectedEvent}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default BigCalendrierRetro;
