import React from "react";
import NavBarGlobal from "../../components/navbars/NavBarGlobal";
import NavBarEncodage from "../../components/navbars/NavBarEncodage";
import FormulaireAnimations from "../../components/formulaires/FormulaireAnimations";
import AnimatedContainer from "../../components/AnimatedContainer";

const Animations = () => {
  return (
    <div>
      <NavBarGlobal />
      <h1>Encodage des animations</h1>
      <NavBarEncodage />
      <AnimatedContainer containerClass="form-container">
        <FormulaireAnimations />
      </AnimatedContainer>
    </div>
  );
};

export default Animations;
