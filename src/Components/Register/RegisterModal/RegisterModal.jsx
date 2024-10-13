import React from 'react';
import './RegisterModal.css';
import Register from '../Register';
// import Register from '../Register/Register';

const RegisterModal = ({ show, handleClose }) => {
  const handleClickOutside = (e) => {
    if (e.target.className === 'modal-overlay') {
      handleClose();
    }
  };

  return (
    show && (
      <div className="modal-overlay" onClick={handleClickOutside}>
         <Register />
        
      </div>
    )
  );
};

export default RegisterModal;
