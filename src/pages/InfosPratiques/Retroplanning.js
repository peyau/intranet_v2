import React from "react";
import NavBarGlobal from "../../components/NavBarGlobal";
import BigCalendrier from "../../components/BigCalendrier";
import NavBarInfosPratiques from "../../components/NavBarInfosPratiques";
import AnimatedContainer from "../../components/AnimatedContainer";

const Retroplanning = () => {
  return (
    <div>
      <NavBarGlobal />
      <h1>Rétro planning</h1>
      <NavBarInfosPratiques />
      <AnimatedContainer containerClass="sub-container">
        <BigCalendrier />
      </AnimatedContainer>
    </div>
  );
};

export default Retroplanning;
