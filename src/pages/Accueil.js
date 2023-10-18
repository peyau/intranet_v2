import React, { useState } from "react";
import { format } from "date-fns";
import NavBarGlobal from "../components/navbars/NavBarGlobal";
import { useDateContext } from "../components/calendars/DateContext";
import AnimatedContainer from "../components/common/AnimatedContainer";

const Accueil = () => {
  const { selectedDate } = useDateContext();

  return (
    <div>
      <NavBarGlobal />
      <h1>Accueil</h1>
      <AnimatedContainer containerClass="sub-container">
        <h2 className="date-info">
          Voici les informations du {format(selectedDate, "dd/MM/yyyy")}
        </h2>
      </AnimatedContainer>
    </div>
  );
};

export default Accueil;
