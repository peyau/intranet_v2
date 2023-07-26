import React from "react";
import { NavLink } from "react-router-dom";

const NavigationEncodage = () => {
  return (
    <div className="navigationEncodage">
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

export default NavigationEncodage;
