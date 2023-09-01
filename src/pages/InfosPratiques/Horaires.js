import React from "react";
import NavBarGlobal from "../../components/navbars/NavBarGlobal";
import NavBarInfosPratiques from "../../components/navbars/NavBarInfosPratiques";
import AnimatedContainer from "../../components/AnimatedContainer";

const Horaires = () => {
  return (
    <div>
      <NavBarGlobal />
      <h1>Horaires des agents</h1>
      <NavBarInfosPratiques />
      <AnimatedContainer containerClass="sub-container">
        <h2>L'horaire de l'équipe</h2>
      </AnimatedContainer>
    </div>
  );
};

export default Horaires;
