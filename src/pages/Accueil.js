import React from "react";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import NavBarGlobal from "../components/NavBarGlobal";

const Accueil = () => {
  const location = useLocation();
  const selectedDate = location.state && location.state.selectedDate;

  // Utilisez la date actuelle comme valeur par défaut si selectedDate est null
  const defaultDate = selectedDate || new Date();

  return (
    <div>
      <NavBarGlobal />
      <h1>Accueil</h1>
      <h2 className="date-info">
        Voici les informations du {format(defaultDate, "dd/MM/yyyy")}
      </h2>
    </div>
  );
};

export default Accueil;
