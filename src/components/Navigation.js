import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from "./Modal";
import TitreEtLogo from "./TitreEtLogo";

const NavBar = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="NavBarGlobal">
      <TitreEtLogo />
      <div className="NavBar">
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
        <button className="login-button" onClick={handleOpenModal}>
          Se connecter
        </button>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </div>
  );
};

export default NavBar;
