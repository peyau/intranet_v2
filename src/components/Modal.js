// Modal.js
import React, { useEffect } from "react";

const Modal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.keyCode === 27) {
        // Vérifier si la touche "Échap" (code 27) a été enfoncée
        onClose(); // Appeler la fonction de fermeture de la modal
      }
    };

    const handleOutsideClick = (event) => {
      if (!event.target.closest(".modal-content")) {
        // Fermer la modal si le clic est en dehors de la modal
        onClose(); // Appeler la fonction de fermeture de la modal
      }
    };

    // Ajouter les écouteurs d'événements lors de l'ouverture de la modal
    if (isOpen) {
      document.addEventListener("keydown", handleKeyPress);
      document.addEventListener("mousedown", handleOutsideClick);
    }

    // Supprimer les écouteurs d'événements lorsque la modal est fermée ou démontée
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">Connexion</h2>
        <form>
          <label className="modal-label">Identifiant:</label>
          <input className="modal-input" type="text" />
          <label className="modal-label">Mot de passe:</label>
          <input className="modal-input" type="password" />
          <button className="modal-button" type="submit">
            Connexion
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
