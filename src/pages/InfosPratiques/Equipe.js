import React from "react";
import NavBarGlobal from "../../components/NavBarGlobal";
import NavBarInfosPratiques from "../../components/NavBarInfosPratiques";
import AnimatedContainer from "../../components/AnimatedContainer";

const Equipe = () => {
  return (
    <div>
      <NavBarGlobal />
      <h1>Equipe</h1>
      <NavBarInfosPratiques />
      <AnimatedContainer containerClass="sub-container">
        <h2>Les infos de l'équipe</h2>
      </AnimatedContainer>
    </div>
  );
};

export default Equipe;
