import React, { useState } from "react";
import { format } from "date-fns";
import NavBarGlobal from "../components/NavBarGlobal";
import { useDateContext } from "../components/DateContext";
import AnimatedContainer from "../components/AnimatedContainer";

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
