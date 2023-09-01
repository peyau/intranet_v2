import React from "react";
import NavBarGlobal from "../../components/navbars/NavBarGlobal";
import NavBarInfosPratiques from "../../components/navbars/NavBarInfosPratiques";
import BigCalendrier from "../../components/calendriers/BigCalendrier";
import AnimatedContainer from "../../components/AnimatedContainer";

const Retroplanning = () => {
  return (
    <div>
      <NavBarGlobal />
      <h1>Rétroplanning</h1>
      <NavBarInfosPratiques />
      <AnimatedContainer containerClass="sub-container">
        <BigCalendrier />
      </AnimatedContainer>
    </div>
  );
};

export default Retroplanning;
