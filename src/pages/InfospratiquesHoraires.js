import React from "react";
import NavBar from "../components/Navigation";
import NavBarInfosPratiques from "../components/NavigationInfosPratiques";

const InfosPratiquesHoraires = () => {
  return (
    <div>
      <NavBar />
      <h1>Horaires des agents</h1>
      <NavBarInfosPratiques />
    </div>
  );
};

export default InfosPratiquesHoraires;
