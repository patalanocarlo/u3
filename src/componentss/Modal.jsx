import React from 'react';
import './Modal.css'; 

function Modal({ closeModal, children }) {
  return (
    <div className="modal-overlay" >
      <div className="modal">
        <button className="close-modal" onClick={closeModal}>X</button>
        {children}
      </div>
    </div>
  );
}

export default Modal;