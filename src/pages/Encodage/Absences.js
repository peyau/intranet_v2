import React from "react";
import NavBarGlobal from "../../components/NavBarGlobal";
import NavBarEncodage from "../../components/NavBarEncodage";
import FormulaireAbsences from "../../components/Formulaires/FormulaireAbsences";

const Absences = () => {
  return (
    <div>
      <NavBarGlobal />
      <h1>Encodage des absences</h1>
      <NavBarEncodage />
      <FormulaireAbsences />
    </div>
  );
};

export default Absences;
