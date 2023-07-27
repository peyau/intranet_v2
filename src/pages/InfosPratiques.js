import React from "react";
import NavBar from "../components/Navigation";
import NavBarInfospratiques from "../components/NavigationInfospratiques";

const InfosPratiques = () => {
  return (
    <div>
      <NavBar />
      <h1>Infos pratiques</h1>
      <NavBarInfospratiques />
    </div>
  );
};

export default InfosPratiques;
