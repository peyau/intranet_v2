import React from "react";
import { NavLink } from "react-router-dom";

const NavBarEncodage = () => {
  return (
    <div className="navbar-secondaire">
      <ul>
        <NavLink to="/encodage/animations">
          <li>Animations</li>
        </NavLink>

        <NavLink to="/encodage/absences">
          <li>Absences</li>
        </NavLink>

        <NavLink to="/encodage/reservations">
          <li>Réservation</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default NavBarEncodage;
