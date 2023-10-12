import React from "react";
import NavBarGlobal from "../../components/navbars/NavBarGlobal";
import NavBarEncodage from "../../components/navbars/NavBarEncodage";
import FormReservation from "../../components/forms/FormReservation";
import AnimatedContainer from "../../components/common/AnimatedContainer";

const Reservations = () => {
  return (
    <div>
      <NavBarGlobal />
      <h1>Encodage des réservations</h1>
      <NavBarEncodage />
      <AnimatedContainer containerClass="form-container">
        <FormReservation />
      </AnimatedContainer>
    </div>
  );
};

export default Reservations;
