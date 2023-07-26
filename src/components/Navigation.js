import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <li>
          <NavLink to="/">Accueil</NavLink>
        </li>
        <li className="nav-dropdown">
          <NavLink to="/encodage">Encodage</NavLink>
          <div className="sub-nav">
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
        </li>
        <li className="nav-dropdown">
          <NavLink to="/infospratiques">Infos pratiques</NavLink>
          <div className="sub-nav">
            <ul>
              <li>
                <NavLink to="/infospratiques/equipe">Equipe</NavLink>
              </li>
              <li>
                <NavLink to="/infospratiques/horaires">Horaires</NavLink>
              </li>
              <li>
                <NavLink to="/infospratiques/numeros">
                  Numéros de téléphone
                </NavLink>
              </li>
              <li>
                <NavLink to="/infospratiques/protocoles">Protocoles</NavLink>
              </li>
              <li>
                <NavLink to="/infospratiques/faq">FAQ</NavLink>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <NavLink to="/perso">Page personnelle</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
