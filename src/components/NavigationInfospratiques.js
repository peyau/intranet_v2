import React from "react";
import { NavLink } from "react-router-dom";

const NavBarInfospratiques = () => {
  return (
    <div className="NavBarSecondaire">
      <ul>
        <li>
          <NavLink to="/infospratiques/equipe">Equipe</NavLink>
        </li>
        <li>
          <NavLink to="/infospratiques/horaires">Horaires</NavLink>
        </li>
        <li>
          <NavLink to="/infospratiques/numeros">Numéros</NavLink>
        </li>
        <li>
          <NavLink to="/infospratiques/protocoles">Protocoles</NavLink>
        </li>
        <li>
          <NavLink to="/infospratiques/FAQ">FAQ</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBarInfospratiques;
