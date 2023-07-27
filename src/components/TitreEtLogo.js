// TitreEtLogo.js
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../styles/img/logo_intranet_1.png";

const TitreEtLogo = () => {
  return (
    <div className="TitreEtLogo">
      <NavLink to="/" className="TitreEtLogo">
        <img src={logo} alt="Logo" className="logo" />
        <div className="titre-container">
          <span className="bibliotheque">
            Bibliothèque <br /> de Mouscron
          </span>
        </div>
        <span className="barre-oblique">&frasl;</span>
        <span className="intranet">Intranet</span>
      </NavLink>
    </div>
  );
};

export default TitreEtLogo;
