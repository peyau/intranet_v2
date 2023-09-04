import React from "react";
import NavBarGlobal from "../../components/navbars/NavBarGlobal";
import NavBarEncodage from "../../components/navbars/NavBarEncodage";
import FormulaireAnimations from "../../components/formulaires/FormulaireAnimations";

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
