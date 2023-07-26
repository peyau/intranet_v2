import React from "react";
import NavBar from "../components/Navigation";
import NavBarInfospratiques from "../components/NavigationInfospratiques";

const InfospratiquesHoraires = () => {
  return (
    <div>
      <NavBar />
      <h1>Horaires des agents</h1>
      <NavBarInfospratiques />
    </div>
  );
};

export default InfospratiquesHoraires;
