import React from "react";
import NavBarGlobal from "../../components/navbars/NavBarGlobal";
import NavBarEncodage from "../../components/navbars/NavBarEncodage";
import FormulaireAbsences from "../../components/formulaires/FormulaireAbsences";
import AnimatedContainer from "../../components/AnimatedContainer";

const Absences = () => {
  return (
    <div>
      <NavBarGlobal />
      <h1>Encodage des absences</h1>
      <NavBarEncodage />
      <AnimatedContainer containerClass="form-container">
        <FormulaireAbsences />
      </AnimatedContainer>
    </div>
  );
};

export default Absences;
