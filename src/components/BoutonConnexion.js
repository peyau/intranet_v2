import React, { useEffect, useState } from "react";
import Modal from "./Modal";

const BoutonConnexion = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="div-button-connexion">
      <button className="login-button" onClick={handleOpenModal}>
        Se connecter
      </button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default BoutonConnexion;
