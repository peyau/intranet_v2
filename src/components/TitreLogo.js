// TitreEtLogo.js
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/logo_intranet_1.png";

const TitreLogo = () => {
  return (
    <div className="titre-logo">
      <NavLink to="/" className="titre-logo">
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

export default TitreLogo;
