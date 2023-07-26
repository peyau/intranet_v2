import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="NavBar">
      <ul>
        <li>
          <NavLink to="/">Accueil</NavLink>
        </li>
        <li className="nav-dropdown">
          <NavLink to="/encodage">Encodage</NavLink>
        </li>
        <li className="nav-dropdown">
          <NavLink to="/infospratiques">Infos pratiques</NavLink>
        </li>
        <li>
          <NavLink to="/perso">Page personnelle</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
