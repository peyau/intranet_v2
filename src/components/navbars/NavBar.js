import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
        <NavLink to="/encodage">
          <li>Encodage</li>
        </NavLink>
        <NavLink to="/infospratiques">
          <li>Infos pratiques</li>
        </NavLink>
        <NavLink to="/perso">
          <li>Page personnelle</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default NavBar;
