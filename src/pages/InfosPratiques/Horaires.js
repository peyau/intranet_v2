import React from "react";
import NavBar from "../../components/Navigation";
import NavBarInfosPratiques from "../../components/NavigationInfosPratiques";

const Horaires = () => {
  return (
    <div>
      <NavBar />
      <h1>Horaires des agents</h1>
      <NavBarInfosPratiques />
    </div>
  );
};

export default Horaires;
