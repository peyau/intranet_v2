import React from "react";
import { NavLink } from "react-router-dom";

const NavBarInfosPratiques = () => {
  return (
    <div className="navbar-secondaire">
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

        <NavLink to="/infospratiques/retroplanning">
          <li>Rétroplanning</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default NavBarInfosPratiques;
