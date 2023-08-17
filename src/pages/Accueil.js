import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import NavBarGlobal from "../components/NavBarGlobal";
import { useDateContext } from "../components/DateContext";

const Accueil = () => {
  const { selectedDate } = useDateContext();

  // Animation de la div
  const [showContainer, setShowContainer] = useState(false);

  useEffect(() => {
    setShowContainer(true);
  }, []);

  return (
    <div>
      <NavBarGlobal />
      <h1>Accueil</h1>
      <div className={`sub-container ${showContainer ? "fade-in" : "hidden"}`}>
        <h2 className="date-info">
          Voici les informations du {format(selectedDate, "dd/MM/yyyy")}
        </h2>
      </div>
    </div>
  );
};

export default Accueil;
