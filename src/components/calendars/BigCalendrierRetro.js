import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import "moment/locale/fr";
import ModalCalendrier from "../modals/ModalCalendrier"; // Assure-toi de corriger le chemin d'accès si nécessaire

const localizer = momentLocalizer(moment);

const getEventColor = (title) => {
  if (title.includes("tricot")) {
    return "#EB5B6E";
  } else if (title.includes("Touche")) {
    return "#0A9CA3";
  } else if (title.includes("bébé")) {
    return "#F9B233";
  } else if (title.includes("EPN")) {
    return "#5DC4E5";
  } else if (title.includes("petit")) {
    return "#E4350F";
  } else if (title.includes("aiguille") || title.includes("laine")) {
    return "#D2A5CD";
  } else if (title.includes("dé-stress")) {
    return "#A12181";
  } else if (title.includes("ouvrages")) {
    return "#E94E1B";
  } else if (title.includes("Soirée") || title.includes("Jeudi")) {
    return "#3AAA36";
  } else {
    return "#000000";
  }
};

const events = [
  {
    start: new Date(2023, 7, 30, 10),
    end: new Date(2023, 7, 30, 12),
    title: "Atelier tricot",
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
    title: "EPN - Stage de code",
    info: "Lien vers l'animation ou event avec les infos",
  },
  {
    start: new Date(2023, 8, 30, 10),
    end: new Date(2023, 8, 31, 12),
    title: "Touche à tout",
    info: "Lien vers l'animation ou event avec les infos",
  },
  {
    start: new Date(2023, 8, 28, 10),
    end: new Date(2023, 8, 28, 12),
    title: "Lis avec bébé",
    info: "Lien vers l'animation ou event avec les infos",
  },
  {
    start: new Date(2023, 8, 27, 10),
    end: new Date(2023, 8, 28, 12),
    title: "Lis avec petit",
    info: "Lien vers l'animation ou event avec les infos",
  },
  {
    start: new Date(2023, 8, 24, 10),
    end: new Date(2023, 8, 24, 12),
    title: "Jeux d'aiguille",
    info: "Lien vers l'animation ou event avec les infos",
  },
  {
    start: new Date(2023, 8, 18, 10),
    end: new Date(2023, 8, 18, 12),
    title: "Jeux de laine",
    info: "Lien vers l'animation ou event avec les infos",
  },
  {
    start: new Date(2023, 8, 24, 10),
    end: new Date(2023, 8, 24, 12),
    title: "Couleurs dé-stress",
    info: "Lien vers l'animation ou event avec les infos",
  },
  {
    start: new Date(2023, 8, 22, 10),
    end: new Date(2023, 8, 22, 12),
    title: "La boîte à ouvrages",
    info: "Lien vers l'animation ou event avec les infos",
  },
  {
    start: new Date(2023, 8, 23, 10),
    end: new Date(2023, 8, 23, 12),
    title: "Jeudi jeux",
    info: "Lien vers l'animation ou event avec les infos",
  },
  {
    start: new Date(2023, 8, 26, 10),
    end: new Date(2023, 8, 26, 12),
    title: "Soirée jeux",
    info: "Lien vers l'animation ou event avec les infos",
  },
  {
    start: new Date(2023, 8, 23, 10),
    end: new Date(2023, 8, 27, 12),
    title: "EPN - Stage de code",
    info: "Lien vers l'animation ou event avec les infos",
  },
  {
    start: new Date(2023, 8, 16, 10),
    end: new Date(2023, 8, 16, 12),
    title: "Atelier tricot",
    info: "Lien vers l'animation ou event avec les infos",
  },
  {
    start: new Date(2023, 8, 17, 10),
    end: new Date(2023, 8, 17, 12),
    title: "Atelier tricot",
    info: "Lien vers l'animation ou event avec les infos",
  },
  {
    start: new Date(2023, 8, 18, 10),
    end: new Date(2023, 8, 18, 12),
    title: "Atelier tricot",
    info: "Lien vers l'animation ou event avec les infos",
  },
  // ... Ajoutez d'autres événements ici
];

const BigCalendrierRetro = () => {
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
};

export default BigCalendrierRetro;
