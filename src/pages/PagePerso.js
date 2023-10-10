import React from "react";
import NavBarGlobal from "../components/navbars/NavBarGlobal";
import AnimatedContainer from "../components/AnimatedContainer";

const PagePerso = () => {
  return (
    <div>
      <NavBarGlobal />
      <h1>Page perso</h1>
      <AnimatedContainer containerClass="sub-container">
        <h2>Page personelle</h2>
      </AnimatedContainer>
    </div>
  );
};

export default PagePerso;
