import React from "react";
import NavBarGlobal from "../../components/navbars/NavBarGlobal";
import NavBarEncodage from "../../components/navbars/NavBarEncodage";
import FormulaireReservation from "../../components/formulaires/FormulaireReservations";
import AnimatedContainer from "../../components/AnimatedContainer";

const Reservations = () => {
  return (
    <div>
      <NavBarGlobal />
      <h1>Encodage des réservations</h1>
      <NavBarEncodage />
      <AnimatedContainer containerClass="form-container">
        <FormulaireReservation />
      </AnimatedContainer>
    </div>
  );
};

export default Reservations;
