import React from "react";
import NavBarGlobal from "../../components/navbars/NavBarGlobal";
import NavBarEncodage from "../../components/navbars/NavBarEncodage";
import FormulaireAbsences from "../../components/formulaires/FormulaireAbsences";

const Absences = () => {
  return (
    <div>
      <NavBarGlobal />
      <h1>Encodage des absences</h1>
      <NavBarEncodage />
      <FormulaireAbsences />
      test
    </div>
  );
};

export default Absences;
