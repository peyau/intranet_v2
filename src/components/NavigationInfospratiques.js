import React from "react";
import { NavLink } from "react-router-dom";

const NavBarInfospratiques = () => {
  return (
    <div className="NavBarSecondaire">
      <ul>
        <NavLink to="/infospratiques/equipe">
          <li>Equipe</li>
        </NavLink>

        <NavLink to="/infospratiques/horaires">
          <li>Horaires</li>
        </NavLink>

        <NavLink to="/infospratiques/numeros">
          <li>Numéros</li>
        </NavLink>

        <NavLink to="/infospratiques/protocoles">
          <li>Protocoles</li>
        </NavLink>

        <NavLink to="/infospratiques/FAQ">
          <li>FAQ</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default NavBarInfospratiques;
