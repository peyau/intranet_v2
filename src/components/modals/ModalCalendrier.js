import React from "react";
import Modal from "react-modal";

const ModalCalendrier = ({ selectedEvent, onClose }) => {
  return (
    <Modal
      isOpen={selectedEvent !== null}
      onRequestClose={onClose}
      overlayClassName="modal-overlay"
      className="custom-modal"
      ariaHideApp={false}
    >
      {selectedEvent && (
        <div>
          <h2 className="modal-title">{selectedEvent.title}</h2>
          <p>{selectedEvent.info}</p>
        </div>
      )}
    </Modal>
  );
};

export default ModalCalendrier;
