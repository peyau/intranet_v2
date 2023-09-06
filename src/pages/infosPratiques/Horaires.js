import React from "react";
import NavBarGlobal from "../../components/navbars/NavBarGlobal";
import NavBarInfosPratiques from "../../components/navbars/NavBarInfosPratiques";
import AnimatedContainer from "../../components/AnimatedContainer";
import TableDataSchedule from "../../components/TableDataSchedule";

const Horaires = () => {
  const horaire = [
    {
      nom: "Personne 1",
      semaine1: {
        lundi: "8h30-12h\n13h-17h",
        mardi: "9:00 - 17:00",
        mercredi: "9:00 - 17:00",
        jeudi: "9:00 - 17:00",
        vendredi: "9:00 - 17:00",
        samedi: "9:00 - 13:00",
      },
      semaine2: {
        lundi: "10:00 - 18:00",
        mardi: "10:00 - 18:00",
        mercredi: "10:00 - 18:00",
        jeudi: "10:00 - 18:00",
        vendredi: "10:00 - 18:00",
        samedi: "10:00 - 14:00",
      },
    },
    {
      nom: "Personne 2",
      semaine1: {
        lundi: "8:30 - 16:30",
        mardi: "8:30 - 16:30",
        mercredi: "8:30 - 16:30",
        jeudi: "8:30 - 16:30",
        vendredi: "8:30 - 16:30",
        samedi: "8:30 - 12:30",
      },
      semaine2: {
        lundi: "9:30 - 17:30",
        mardi: "9:30 - 17:30",
        mercredi: "9:30 - 17:30",
        jeudi: "9:30 - 17:30",
        vendredi: "9:30 - 17:30",
        samedi: "9:30 - 13:30",
      },
    },
  ];

  return (
    <div>
      <NavBarGlobal />
      <h1>Horaires des agents</h1>
      <NavBarInfosPratiques />
      <AnimatedContainer containerClass="sub-container">
        <h2>L'horaire de l'équipe</h2>
        <TableDataSchedule data={horaire} className="table-data-schedule" />
      </AnimatedContainer>
    </div>
  );
};

export default Horaires;
