import React from "react";
import NavBarGlobal from "../../components/navbars/NavBarGlobal";
import NavBarInfosPratiques from "../../components/navbars/NavBarInfosPratiques";
import AnimatedContainer from "../../components/AnimatedContainer";
import TableData from "../../components/TableData";

const Horaires = () => {
  const horaire = [
    {
      nom: "Jonathan",
      lundi: "8h30-12h\n13h-17h",
      mardi: "10h-13h",
      mercredi: "10h-13h",
      jeudi: "10h-13h",
      vendredi: "10h-13h",
      samedi: "10h-13h",
    },
    {
      nom: "Jonathan",
      lundi: "10h-13h",
      mardi: "10h-13h",
      mercredi: "10h-13h",
      jeudi: "10h-13h",
      vendredi: "10h-13h",
      samedi: "10h-13h",
    },
  ];

  return (
    <div>
      <NavBarGlobal />
      <h1>Horaires des agents</h1>
      <NavBarInfosPratiques />
      <AnimatedContainer containerClass="sub-container">
        <h2>L'horaire de l'équipe</h2>
        <TableData data={horaire} className="table-data" />
      </AnimatedContainer>
    </div>
  );
};

export default Horaires;
