import React from "react";
import Modal from "react-modal";
import importedImages from "../ImportImages.js"; // Import the images
import defaultImage from "../../assets/img/cards/default_image.png";

function ModalEmploye({ selectedEmployee, onClose }) {
  return (
    <Modal
      isOpen={selectedEmployee !== null}
      onRequestClose={onClose}
      overlayClassName="modal-overlay"
      className="custom-modal"
      ariaHideApp={false}
    >
      {selectedEmployee && (
        <div>
          <h2 className="modal-title">
            {selectedEmployee.prenom} {selectedEmployee.nom}
          </h2>
          <img
            src={
              importedImages[
                `${selectedEmployee.prenom}_${selectedEmployee.nom}`
              ] || defaultImage
            }
            alt={`${selectedEmployee.prenom} ${selectedEmployee.nom}`}
            className="modal-employeeImage"
            onError={(e) => {
              e.target.src = defaultImage;
            }}
          />

          <p>Fonction: {selectedEmployee.fonction}</p>
          <p>Bureau: {selectedEmployee.bureau}</p>
          <p>Téléphone: {selectedEmployee.telephone}</p>
          <p>Cercle: {selectedEmployee.cercle}</p>
        </div>
      )}
    </Modal>
  );
}

export default ModalEmploye;
