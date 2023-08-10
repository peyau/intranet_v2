import React from "react";
import NavBarGlobal from "../../components/NavBarGlobal";
import NavBarEncodage from "../../components/NavBarEncodage";
import FormulaireReservation from "../../components/Formulaires/FormulaireReservations";

const Reservations = () => {
  return (
    <div>
      <NavBarGlobal />
      <h1>Encodage des réservations</h1>
      <NavBarEncodage />
      <FormulaireReservation />
    </div>
  );
};

export default Reservations;
