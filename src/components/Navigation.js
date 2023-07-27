import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from "./Modal";

const NavBar = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="NavBar">
      <ul>
        <li>
          <NavLink to="/">Accueil</NavLink>
        </li>
        <li>
          <NavLink to="/encodage">Encodage</NavLink>
        </li>
        <li>
          <NavLink to="/infospratiques">Infos pratiques</NavLink>
        </li>
        <li>
          <NavLink to="/perso">Page personnelle</NavLink>
        </li>
      </ul>
      <button className="login-button" onClick={handleOpenModal}>
        Se connecter
      </button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default NavBar;
