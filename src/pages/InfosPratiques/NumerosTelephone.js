import React from "react";
import NavBarGlobal from "../../components/NavBarGlobal";
import NavBarInfosPratiques from "../../components/NavBarInfosPratiques";
import AnimatedContainer from "../../components/AnimatedContainer";

const NumerosTelephone = () => {
  return (
    <div>
      <NavBarGlobal />
      <h1>Numéros de téléphone</h1>
      <NavBarInfosPratiques />
      <AnimatedContainer containerClass="sub-container">
        <h2>Les numéros de téléphone</h2>
      </AnimatedContainer>
    </div>
  );
};

export default NumerosTelephone;
