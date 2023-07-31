import React from "react";
import NavBar from "../../components/Navigation";
import NavBarInfosPratiques from "../../components/NavigationInfosPratiques";

const InfosPratiques = () => {
  return (
    <div>
      <NavBar />
      <h1>Infos pratiques</h1>
      <NavBarInfosPratiques />
    </div>
  );
};

export default InfosPratiques;
