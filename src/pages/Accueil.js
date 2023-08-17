import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import NavBarGlobal from "../components/NavBarGlobal";

const Accueil = () => {
  const location = useLocation();
  const selectedDate = location.state && location.state.selectedDate;

  const defaultDate = selectedDate || new Date(); // Utilisez la date actuelle comme valeur par défaut si selectedDate est null

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
          Voici les informations du {format(defaultDate, "dd/MM/yyyy")}
        </h2>
      </div>
    </div>
  );
};

export default Accueil;
