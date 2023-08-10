import React from "react";
import NavBarGlobal from "../../components/NavBarGlobal";
import NavBarEncodage from "../../components/NavBarEncodage";
import FormulaireAnimations from "../../components/Formulaires/FormulaireAnimations";

const Animations = () => {
  return (
    <div>
      <NavBarGlobal />
      <h1>Encodage des animations</h1>
      <NavBarEncodage />
      <FormulaireAnimations />
    </div>
  );
};

export default Animations;
