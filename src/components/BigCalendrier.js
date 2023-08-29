import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import "moment/locale/fr"; // Si vous souhaitez localiser en français

const localizer = momentLocalizer(moment);

const events = [
  {
    start: new Date(2023, 7, 30), // 7 pour août (les mois sont indexés à partir de 0)
    end: new Date(2023, 7, 30),
    title: "Lecture au parc",
    info: "Information concernant l'événement 1",
  },
  {
    start: new Date(),
    end: new Date(),
    title: "Jeux vidéos",
    info: "Information concernant l'événement 1",
  },
  {
    start: new Date(), // Date de début de l'événement
    end: new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000), // Date de fin de l'événement (3 jours plus tard)
    title: "Stage de code",
    info: "Lien vers l'animation ou event avec les infos dedans",
  },
  // ... Ajoutez d'autres événements ici
];

const handleEventClick = (event) => {
  alert(`Information : ${event.info}`);
};

const eventStyleGetter = (event) => {
  const backgroundColor = getEventColor(event.title); // Obtenir la couleur en fonction du titre
  const style = {
    backgroundColor,
    borderRadius: "0px",
    opacity: 0.8,
    color: "white",
    border: "0px",
    display: "block",
  };
  return { style };
};

const getEventColor = (title) => {
  // Mettez en place une logique pour mapper le titre à une couleur
  if (title.includes("Stage")) {
    return "red";
  } else if (title.includes("Lecture")) {
    return "blue";
  } else {
    return "green";
  }
};

function MyCalendar() {
  return (
    <div style={{ height: "500px" }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        eventPropGetter={eventStyleGetter}
        onSelectEvent={handleEventClick}
      />
    </div>
  );
}

export default MyCalendar;
