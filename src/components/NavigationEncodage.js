import React from "react";
import { NavLink } from "react-router-dom";

const NavBarEncodage = () => {
  return (
    <div className="NavBarSecondaire">
      <ul>
        <li>
          <NavLink to="/encodage/animations">Animations</NavLink>
        </li>
        <li>
          <NavLink to="/encodage/absences">Absences</NavLink>
        </li>
        <li>
          <NavLink to="/encodage/reservations">Réservation</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBarEncodage;
