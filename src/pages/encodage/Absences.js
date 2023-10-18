import React from "react";
import NavBarGlobal from "../../components/navbars/NavBarGlobal";
import NavBarEncodage from "../../components/navbars/NavBarEncodage";
import FormAbsence from "../../components/forms/FormAbsence";
import AnimatedContainer from "../../components/common/AnimatedContainer";

const Absences = () => {
  return (
    <div>
      <NavBarGlobal />
      <h1>Encodage des absences</h1>
      <NavBarEncodage />
      <AnimatedContainer containerClass="form-container">
        <FormAbsence />
      </AnimatedContainer>
    </div>
  );
};

export default Absences;
