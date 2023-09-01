import React from "react";
import NavBarGlobal from "../../components/navbars/NavBarGlobal";
import NavBarInfosPratiques from "../../components/navbars/NavBarInfosPratiques";
import AnimatedContainer from "../../components/AnimatedContainer";

const Protocoles = () => {
  return (
    <div>
      <NavBarGlobal />
      <h1>Protocoles</h1>
      <NavBarInfosPratiques />
      <AnimatedContainer containerClass="sub-container">
        <h2>Les protocoles</h2>
      </AnimatedContainer>
    </div>
  );
};

export default Protocoles;
